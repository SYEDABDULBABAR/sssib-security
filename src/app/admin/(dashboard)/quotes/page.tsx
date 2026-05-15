'use client'

import { useEffect, useState } from 'react'
import { FaTrash, FaEnvelope, FaPhone, FaBuilding, FaCheck } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface QuoteRequest {
  id: string
  name: string
  email: string
  phone: string
  company: string | null
  service: string
  details: string | null
  status: string
  createdAt: string
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/quote').then(r => r.json()).then(data => { setQuotes(data); setLoading(false) })
  }, [])

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/quote`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    const data = await fetch('/api/quote').then(r => r.json())
    setQuotes(data)
    toast.success('Status updated')
  }

  const deleteQuote = async (id: string) => {
    if (!confirm('Delete this quote request?')) return
    await fetch(`/api/quote`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    const data = await fetch('/api/quote').then(r => r.json())
    setQuotes(data)
    toast.success('Deleted')
  }

  if (loading) return <div className="text-center py-20 text-gray-400">Loading...</div>

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Quote Requests</h1>

      {quotes.length === 0 ? (
        <p className="text-gray-400 text-center py-20">No quote requests yet</p>
      ) : (
        <div className="space-y-4">
          {quotes.map((q) => (
            <div key={q.id} className={`bg-white rounded-xl border p-6 ${q.status === 'new' ? 'border-yellow-300 bg-yellow-50/30' : 'border-gray-100'}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-primary text-lg">{q.name}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1"><FaEnvelope /> {q.email}</span>
                    <span className="flex items-center gap-1"><FaPhone /> {q.phone}</span>
                    {q.company && <span className="flex items-center gap-1"><FaBuilding /> {q.company}</span>}
                  </div>
                  <span className="inline-block mt-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{q.service}</span>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={q.status}
                    onChange={(e) => updateStatus(q.id, e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="quoted">Quoted</option>
                    <option value="closed">Closed</option>
                  </select>
                  <button onClick={() => deleteQuote(q.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                    <FaTrash />
                  </button>
                </div>
              </div>
              {q.details && <p className="text-gray-700 whitespace-pre-wrap">{q.details}</p>}
              <p className="text-xs text-gray-400 mt-3">{new Date(q.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
