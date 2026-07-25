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

  const handleSend = async (overrideMessage?: string) => {
    const userMessage = overrideMessage || input.trim();
    if (!userMessage || isLoading) return;

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
      setMessages((prev) => [...prev, { role: "ai", content: "I'm having trouble connecting right now. Try again in a moment!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-terminal-blue text-background rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50 glow-border cursor-pointer"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed inset-0 sm:inset-auto sm:bottom-24 sm:right-6 sm:w-96 sm:h-[600px] bg-[#0d0d0d] flex flex-col z-[100] sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10 sm:border-terminal-blue/20"
          >
            {/* Header */}
            <div className="bg-white/[0.03] p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-terminal-blue flex items-center justify-center">
                  <Bot size={20} className="text-background" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-white">Nassim&apos;s Digital Twin</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-terminal-green animate-pulse" />
                    <p className="text-[10px] text-terminal-green uppercase tracking-widest font-mono font-bold">Online</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 hover:bg-white/5 rounded-lg transition-colors text-white/40 hover:text-white cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                >
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${
                    msg.role === "user" ? "bg-white/10" : "bg-terminal-blue/20"
                  }`}>
                    {msg.role === "user" ? <User size={16} /> : <Bot size={16} className="text-terminal-blue" />}
                  </div>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-terminal-blue text-white" 
                      : "bg-white/[0.05] text-white/90 border border-white/5"
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {/* Quick Replies / Options */}
              {!isLoading && (
                <div className="pt-4 flex flex-col gap-2">
                  <p className="text-[10px] text-white/40 uppercase font-mono px-1">Suggested Questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {["Technical Skills", "Work Experience", "Contact Info", "Current Location"].map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSend(option)}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 hover:border-terminal-blue/50 hover:text-terminal-blue transition-all cursor-pointer"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-terminal-blue/20 flex items-center justify-center">
                    <Bot size={16} className="text-terminal-blue" />
                  </div>
                  <div className="bg-white/[0.05] p-3 rounded-2xl border border-white/5">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-terminal-blue/50 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-terminal-blue/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-terminal-blue/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about Nassim..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-terminal-blue/50 transition-colors placeholder:text-white/20"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={isLoading}
                   className="w-12 h-12 bg-terminal-blue text-background rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 transition-all shadow-[0_0_20px_rgba(0,255,255,0.2)] cursor-pointer"
                >
                  <Bot size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
