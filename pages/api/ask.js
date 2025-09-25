// pages/api/ask.js
import OpenAI from "openai";
import knowledgeBase from "../../data/knowledgeBase";
import { initVectorStore, queryVectorStore } from "../../lib/vectorStore";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const sessions = {};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { question, sessionId } = req.body;

  if (!sessionId) {
    return res.status(400).json({ message: "Missing sessionId" });
  }

  if (!sessions[sessionId]) sessions[sessionId] = { count: 0 };
  if (sessions[sessionId].count >= 10) {
    return res.status(429).json({
      answer: "⚠️ You’ve reached the 10-message limit for this session.",
    });
  }

  try {
    sessions[sessionId].count += 1;

    // ✅ guard for missing knowledgeBase
    if (!knowledgeBase || !Array.isArray(knowledgeBase)) {
      return res.status(500).json({
        answer: "❌ Knowledge base is not available.",
        sources: [],
      });
    }

    // Init vector store
    await initVectorStore(knowledgeBase);

    // Embed question
    const qEmbedding = await client.embeddings.create({
      model: "text-embedding-3-small",
      input: question,
    });

    // Top matches
    const results = queryVectorStore(qEmbedding.data[0].embedding, 3);
    const context = results.map((r) => r.text).join("\n\n");

    const systemPrompt = `
      You are an AI assistant that ONLY answers questions about Kyle Knudson.
      Use the CONTEXT below to answer. Be concise (2–4 sentences).
      If unrelated, say: "I can only answer questions about Kyle Knudson and his work."
    `;

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "system", content: `CONTEXT:\n${context}` },
        { role: "user", content: question },
      ],
      max_tokens: 250,
    });

    const answer = completion.choices[0].message.content;

    res.status(200).json({
      answer,
      sources: results.map((r) => r.title || r.id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ answer: "❌ Something went wrong.", sources: [] });
  }
}