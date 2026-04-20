"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";

export default function ChatbotBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; content: string }[]>([
    { role: "ai", content: "Hi! I'm Nassim's digital twin. Ask me anything about his work or skills!" },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, { role: "user", content: userMessage }] }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { role: "ai", content: data.content }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [...prev, { role: "ai", content: "Sorry, I hit a snag. Please try again!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-terminal-blue text-background rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 glow-border"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[500px] terminal-glass rounded-2xl flex flex-col z-50 overflow-hidden glow-border border-terminal-blue/20"
          >
            {/* Header */}
            <div className="bg-terminal-blue/10 p-4 border-b border-terminal-blue/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-terminal-blue flex items-center justify-center">
                  <Bot size={18} className="text-background" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-terminal-blue">Nassim&apos;s Digital Twin</h3>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Status: Online</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "user" ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                    msg.role === "user" ? "bg-white/10" : "bg-terminal-blue/20"
                  }`}>
                    {msg.role === "user" ? <User size={16} /> : <Bot size={16} className="text-terminal-blue" />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                    msg.role === "user" 
                      ? "bg-white/10 text-white" 
                      : "bg-terminal-blue/5 text-white/90 border border-terminal-blue/10"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-terminal-blue/20 flex items-center justify-center">
                    <Bot size={16} className="text-terminal-blue" />
                  </div>
                  <div className="bg-terminal-blue/5 p-3 rounded-2xl border border-terminal-blue/10">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-terminal-blue rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-terminal-blue rounded-full animate-bounce delay-100" />
                      <span className="w-1.5 h-1.5 bg-terminal-blue rounded-full animate-bounce delay-200" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/5">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 bg-black/40 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-terminal-blue/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="w-10 h-10 bg-terminal-blue text-background rounded-xl flex items-center justify-center hover:bg-terminal-blue/80 disabled:opacity-50 transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
