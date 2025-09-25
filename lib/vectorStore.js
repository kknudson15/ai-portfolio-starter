// lib/vectorStore.js
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

let vectorStore = [];

// Cosine similarity
function cosineSim(a, b) {
  let dot = 0.0, normA = 0.0, normB = 0.0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

export async function initVectorStore(knowledgeBase) {
  if (vectorStore.length > 0) return vectorStore;

  const docs = [];
  docs.push({ id: "about", text: knowledgeBase.about });
  docs.push({ id: "leadership", text: knowledgeBase.leadership });
  docs.push({ id: "education", text: knowledgeBase.education });

  knowledgeBase.projects.forEach((p, i) => {
    docs.push({
      id: `project-${i}`,
      title: p.title,
      text: `${p.title}: ${p.description}. Impact: ${p.impact}. Tech: ${p.tech.join(", ")}`,
    });
  });

  for (const doc of docs) {
    const embedding = await client.embeddings.create({
      model: "text-embedding-3-small",
      input: doc.text,
    });

    vectorStore.push({
      id: doc.id,
      title: doc.title || doc.id,
      text: doc.text,
      embedding: embedding.data[0].embedding,
    });
  }

  return vectorStore;
}

export function queryVectorStore(queryEmbedding, topK = 3) {
  const scored = vectorStore.map((doc) => ({
    ...doc,
    score: cosineSim(queryEmbedding, doc.embedding),
  }));
  return scored.sort((a, b) => b.score - a.score).slice(0, topK);
}