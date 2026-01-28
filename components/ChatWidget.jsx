import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';
import { Send, Sparkles, User, Bot } from 'lucide-react';

// Quick reply suggestions
const quickReplies = [
  "What are Kyle's top skills?",
  "Tell me about his AI projects",
  "What's his leadership experience?",
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [sessionId, setSessionId] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setSessionId(uuidv4());
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = async (messageText = input) => {
    if (!messageText.trim() || !sessionId) return;

    const userMsg = { sender: 'user', text: messageText };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setShowWelcome(false);
    setIsTyping(true);

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: messageText, sessionId }),
      });
      const data = await res.json();

      // Simulate typing delay for more natural feel
      await new Promise(resolve => setTimeout(resolve, 500));

      const aiMsg = { sender: 'ai', text: data.answer, sources: data.sources || [] };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
      const aiMsg = { sender: 'ai', text: "Oops! Something went wrong. Try again! 🔄", sources: [] };
      setMessages((prev) => [...prev, aiMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleQuickReply = (reply) => {
    sendMessage(reply);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button with pulse effect */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gradient-to-r from-[#0071e3] to-[#5856d6] text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse ring */}
        {!isOpen && (
          <motion.span
            className="absolute inset-0 rounded-full bg-[#0071e3]"
            animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? '✕' : <Sparkles className="w-6 h-6" />}
        </motion.span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white dark:bg-gray-900 backdrop-blur-lg rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700"
            style={{ maxHeight: '500px' }}
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-[#0071e3] to-[#5856d6] text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Ask Kyle&apos;s AI</h3>
                  <p className="text-xs text-white/80">Powered by GPT-4</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[200px] max-h-[300px]">
              {/* Welcome message */}
              <AnimatePresence>
                {showWelcome && messages.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center text-gray-500 dark:text-gray-400 py-4"
                  >
                    <Bot className="w-12 h-12 mx-auto mb-3 text-[#0071e3]" />
                    <p className="text-sm mb-4">
                      👋 Hey there! I&apos;m Kyle&apos;s AI assistant. Ask me anything about his skills, projects, or experience!
                    </p>

                    {/* Quick replies */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {quickReplies.map((reply, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleQuickReply(reply)}
                          className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-[#0071e3] hover:text-white transition-colors"
                        >
                          {reply}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Chat messages */}
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#0071e3] to-[#5856d6] flex items-center justify-center flex-shrink-0">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className={`p-3 rounded-2xl text-sm max-w-[75%] ${msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#0071e3] to-[#5856d6] text-white rounded-br-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-md'
                      }`}
                  >
                    <p>{msg.text}</p>
                    {msg.sender === 'ai' && msg.sources?.length > 0 && (
                      <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400">
                        📚 {msg.sources.join(', ')}
                      </div>
                    )}
                  </div>
                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center flex-shrink-0">
                      <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex gap-2 items-center"
                  >
                    <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#0071e3] to-[#5856d6] flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-3 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0071e3] text-sm"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Ask me anything..."
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => sendMessage()}
                  disabled={isTyping}
                  className="px-4 py-2.5 bg-gradient-to-r from-[#0071e3] to-[#5856d6] text-white rounded-xl hover:shadow-lg transition-shadow disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}