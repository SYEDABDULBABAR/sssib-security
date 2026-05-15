'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaShieldAlt, FaUser } from 'react-icons/fa';

interface ChatMessage {
  id: string
  name: string | null
  email: string | null
  message: string
  isAdmin: boolean
  createdAt: string
}

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [step, setStep] = useState<'form' | 'chat'>('form');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && step === 'chat') {
      const interval = setInterval(async () => {
        const res = await fetch('/api/chat');
        const data = await res.json();
        setMessages(data);
      }, 3000);
      fetch('/api/chat').then(r => r.json()).then(setMessages);
      return () => clearInterval(interval);
    }
  }, [open, step]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, isAdmin: false }),
    });
    const data = await res.json();
    if (data.success) {
      setMessage('');
      const updated = await fetch('/api/chat').then(r => r.json());
      setMessages(updated);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-secondary text-primary shadow-lg shadow-secondary/30 flex items-center justify-center hover:bg-secondary-light transition-all hover:scale-110"
        aria-label="Open chat"
      >
        <FaComments className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            <div className="gradient-primary p-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaShieldAlt className="w-6 h-6 text-secondary" />
                <div>
                  <h4 className="font-semibold text-sm">SSSIB</h4>
                  <p className="text-xs text-gray-400">Online • Reply in 2 min</p>
                </div>
              </div>
              <button onClick={() => { setOpen(false); setStep('form'); }} className="text-white/60 hover:text-white transition-colors" aria-label="Close chat">
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {step === 'form' ? (
              <div className="p-6 space-y-4">
                <p className="text-sm text-gray-600">Hi! Please tell us a bit about yourself to start the chat.</p>
                <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm" />
                <input type="email" placeholder="Email (optional)" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm" />
                <button onClick={() => setStep('chat')} className="btn-primary w-full justify-center py-2.5">
                  Start Chat
                </button>
              </div>
            ) : (
              <>
                <div className="p-4 h-80 overflow-y-auto bg-gray-50 space-y-4">
                  {messages.length === 0 && (
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <FaShieldAlt className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm">
                        <p className="text-sm text-gray-700">Hello {name || 'there'}! Welcome to SSSIB. How can we help you today?</p>
                        <p className="text-xs text-gray-400 mt-1">Just now</p>
                      </div>
                    </div>
                  )}
                  {messages.map((m) => (
                    <div key={m.id} className={`flex items-start gap-3 ${m.isAdmin ? '' : 'flex-row-reverse'}`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.isAdmin ? 'bg-secondary/10' : 'bg-primary/10'}`}>
                        {m.isAdmin ? <FaShieldAlt className="w-4 h-4 text-secondary" /> : <FaUser className="w-4 h-4 text-primary" />}
                      </div>
                      <div className={`rounded-lg p-3 shadow-sm max-w-[80%] ${m.isAdmin ? 'bg-white rounded-tl-none' : 'bg-secondary text-primary rounded-tr-none'}`}>
                        <p className="text-sm">{m.message}</p>
                        <p className="text-xs text-gray-400 mt-1">{new Date(m.createdAt).toLocaleTimeString()}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={bottomRef} />
                </div>

                <div className="p-4 border-t border-gray-100">
                  <form className="flex gap-2" onSubmit={sendMessage}>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all text-sm"
                    />
                    <button type="submit" className="w-10 h-10 rounded-xl bg-secondary text-primary flex items-center justify-center hover:bg-secondary-light transition-colors shrink-0">
                      <FaPaperPlane className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
