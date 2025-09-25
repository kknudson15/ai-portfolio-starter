import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid'; // install with npm install uuid

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    // Generate a unique session ID on mount
    setSessionId(uuidv4());
  }, []);

  const sendMessage = async () => {
    if (!input.trim() || !sessionId) return;

    const userMsg = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question: input, sessionId }),
    });
    const data = await res.json();
    
    const aiMsg = { sender: 'ai', text: data.answer, sources: data.sources || [] };
    setMessages((prev) => [...prev, aiMsg]);

    setInput('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0071e3] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-[#005bb5] transition"
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-20 right-0 w-80 bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-gray-200 bg-white/60 font-semibold">
              🤖 Ask Kyle’s AI
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
  <div key={i} className={`p-3 rounded-lg text-sm max-w-[75%] ${
      msg.sender === 'user'
        ? 'ml-auto bg-[#0071e3] text-white'
        : 'mr-auto bg-gray-200 text-gray-800'
    }`}>
    <p>{msg.text}</p>
    {msg.sender === 'ai' && msg.sources?.length > 0 && (
      <div className="mt-1 text-xs text-gray-600">
        Sources: {msg.sources.join(', ')}
      </div>
    )}
  </div>
))}
            </div>

            <div className="p-3 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Ask me anything..."
              />
              <button
                onClick={sendMessage}
                className="px-3 py-2 bg-[#0071e3] text-white rounded-lg hover:bg-[#005bb5] transition"
              >
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}