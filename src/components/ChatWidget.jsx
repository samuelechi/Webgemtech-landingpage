import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Welcome to WebGemTech! Are you looking for a lightning-fast local website, or are we stepping into the main event with custom software?" }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        const currentMessages = [...messages, userMessage];
        setMessages(currentMessages);
        setInput('');
        setIsLoading(true);

        try {
            // Talking to your secure backend!
            const response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: input,
                    history: messages
                }),
            });

            const data = await response.json();

            if (data.reply) {
                setMessages([...currentMessages, { role: 'assistant', content: data.reply }]);
            } else {
                throw new Error("No reply from server");
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages([...currentMessages, {
                role: 'assistant',
                content: "My connection is a bit fuzzy right now, but I'm ready to talk! Click the link below to book a strategy call directly."
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* The Chat Window */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-slate-900 border border-purple-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300">

                    {/* Header */}
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Bot className="w-6 h-6 text-white" />
                            <div>
                                <h3 className="text-white font-bold text-sm">WebGemTech AI</h3>
                                <p className="text-white/70 text-xs">Usually responds instantly</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="h-96 overflow-y-auto p-4 space-y-4 bg-slate-900/50">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                                        ? 'bg-blue-600 text-white rounded-br-sm'
                                        : 'bg-white/10 text-white rounded-bl-sm border border-white/5'
                                    }`}>
                                    {msg.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 p-3 rounded-2xl rounded-bl-sm border border-white/5">
                                    <Loader2 className="w-4 h-4 text-purple-400 animate-spin" />
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSend} className="p-3 bg-slate-800 border-t border-white/10 flex items-center space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about pricing or services..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-white placeholder-white/40 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={isLoading || !input.trim()}
                            className="bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 hover:scale-110 transition-transform duration-300"
            >
                {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageSquare className="w-6 h-6 text-white" />}
            </button>
        </div>
    );
};

export default ChatWidget;