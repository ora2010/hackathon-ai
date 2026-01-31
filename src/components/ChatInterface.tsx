"use client";

import { useState } from "react";
import { Send, Upload, User, Bot } from "lucide-react";
import { motion } from "framer-motion";

interface Message {
    id: string;
    role: "user" | "assistant";
    content: string;
    image?: string;
}

export default function ChatInterface() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "1",
            role: "assistant",
            content: "Сәлем! Мен сіздің мансап бойынша көмекшіңізбін. Сұрақтарыңыз бар ма немесе ҰБТ нәтижелерін талдағыңыз келе ме?",
        },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsTyping(true);

        // Simulate AI response
        setTimeout(() => {
            const aiMessage: Message = {
                id: (Date.now() + 1).toString(),
                role: "assistant",
                content: "Бұл әзірге демо жауап. Менің API интеграциям әлі қосылмаған.",
            };
            setMessages((prev) => [...prev, aiMessage]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="flex flex-col h-[600px] border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                    <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`flex items-start gap-3 ${message.role === "user" ? "flex-row-reverse" : ""
                            }`}
                    >
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${message.role === "user"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-600"
                                }`}
                        >
                            {message.role === "user" ? <User size={16} /> : <Bot size={16} />}
                        </div>
                        <div
                            className={`p-3 rounded-2xl max-w-[80%] ${message.role === "user"
                                    ? "bg-blue-600 text-white rounded-tr-none"
                                    : "bg-gray-100 text-gray-800 rounded-tl-none"
                                }`}
                        >
                            <p>{message.content}</p>
                        </div>
                    </motion.div>
                ))}
                {isTyping && (
                    <div className="flex items-center gap-2 text-gray-400 text-sm ml-12">
                        <span className="animate-bounce">●</span>
                        <span className="animate-bounce delay-75">●</span>
                        <span className="animate-bounce delay-150">●</span>
                    </div>
                )}
            </div>

            <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-2">
                <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Upload size={20} />
                </button>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Хабарлама жазыңыз..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <button
                    onClick={handleSend}
                    disabled={!input.trim()}
                    className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <Send size={20} />
                </button>
            </div>
        </div>
    );
}
