'use client'

import { useEffect, useState, useRef } from 'react'
import { FaReply, FaTrash, FaUser, FaShieldAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface ChatMessage {
  id: string
  name: string | null
  email: string | null
  message: string
  isAdmin: boolean
  read: boolean
  createdAt: string
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(true)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/api/chat?admin=true').then(r => r.json()).then(data => { setMessages(data); setLoading(false) })
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendReply = async () => {
    if (!reply.trim()) return
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: reply, isAdmin: true }),
    })
    const data = await res.json()
    if (data.success) {
      setReply('')
      const updated = await fetch('/api/chat?admin=true').then(r => r.json())
      setMessages(updated)
      toast.success('Reply sent')
    }
  }

  const markAllRead = async () => {
    const unread = messages.filter(m => !m.read && !m.isAdmin)
    for (const m of unread) {
      await fetch('/api/chat', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: m.id }),
      })
    }
    const updated = await fetch('/api/chat?admin=true').then(r => r.json())
    setMessages(updated)
    toast.success('Marked all as read')
  }

  if (loading) return <div className="text-center py-20 text-gray-400">Loading...</div>

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-primary">Live Chat Messages</h1>
        <button onClick={markAllRead} className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-600 px-4 py-2 rounded-lg transition-colors">
          Mark All Read
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="h-96 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <p className="text-gray-400 text-center py-20">No messages yet</p>
          ) : (
            messages.map((m) => (
              <div key={m.id} className={`flex ${m.isAdmin ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-xl px-4 py-3 ${m.isAdmin ? 'bg-secondary text-primary' : 'bg-gray-100 text-gray-800'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {m.isAdmin ? <FaShieldAlt className="text-xs" /> : <FaUser className="text-xs" />}
                    <span className="text-xs font-medium">{m.isAdmin ? 'Admin' : m.name || 'Guest'}</span>
                  </div>
                  <p className="text-sm">{m.message}</p>
                  <p className="text-xs opacity-60 mt-1">{new Date(m.createdAt).toLocaleTimeString()}</p>
                </div>
              </div>
            ))
          )}
          <div ref={bottomRef} />
        </div>

        <div className="border-t border-gray-100 p-4 flex gap-3">
          <input
            type="text" value={reply}
            onChange={(e) => setReply(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendReply()}
            placeholder="Type your reply..."
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary"
          />
          <button onClick={sendReply} className="bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-secondary-light transition-colors">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}
