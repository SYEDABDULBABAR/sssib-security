'use client'

import { useEffect, useState } from 'react'
import { FaTrash, FaEnvelope, FaPhone, FaBuilding, FaCheck } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface Contact {
  id: string
  name: string
  email: string
  phone: string | null
  company: string | null
  message: string
  service: string | null
  status: string
  createdAt: string
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const url = filter ? `/api/contact?status=${filter}` : '/api/contact'
    const res = await fetch(url)
    const data = await res.json()
    setContacts(data)
    setLoading(false)
  }

  const markAsRead = async (id: string) => {
    await fetch(`/api/contact`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status: 'read' }),
    })
    fetchContacts()
    toast.success('Marked as read')
  }

  const deleteContact = async (id: string) => {
    if (!confirm('Delete this contact?')) return
    await fetch(`/api/contact`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    })
    fetchContacts()
    toast.success('Deleted')
  }

  if (loading) return <div className="text-center py-20 text-gray-400">Loading...</div>

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Contact Messages</h1>

      <div className="flex gap-2 mb-6">
        {['', 'new', 'read', 'replied'].map((s) => (
          <button
            key={s}
            onClick={() => { setFilter(s); setLoading(true) }}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === s ? 'bg-secondary text-primary' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {s || 'All'}
          </button>
        ))}
      </div>

      {contacts.length === 0 ? (
        <p className="text-gray-400 text-center py-20">No messages found</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((c) => (
            <div key={c.id} className={`bg-white rounded-xl border p-6 ${c.status === 'new' ? 'border-yellow-300 bg-yellow-50/30' : 'border-gray-100'}`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-primary text-lg">{c.name}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1"><FaEnvelope /> {c.email}</span>
                    {c.phone && <span className="flex items-center gap-1"><FaPhone /> {c.phone}</span>}
                    {c.company && <span className="flex items-center gap-1"><FaBuilding /> {c.company}</span>}
                  </div>
                  {c.service && <span className="inline-block mt-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{c.service}</span>}
                </div>
                <div className="flex gap-2">
                  {c.status === 'new' && (
                    <button onClick={() => markAsRead(c.id)} className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Mark as read">
                      <FaCheck />
                    </button>
                  )}
                  <button onClick={() => deleteContact(c.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 whitespace-pre-wrap">{c.message}</p>
              <p className="text-xs text-gray-400 mt-3">{new Date(c.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
