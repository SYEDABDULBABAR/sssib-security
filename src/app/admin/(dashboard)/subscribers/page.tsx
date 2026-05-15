'use client'

import { useEffect, useState } from 'react'
import { FaTrash, FaEnvelope } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface Subscriber {
  id: string
  email: string
  active: boolean
  createdAt: string
}

export default function SubscribersPage() {
  const [subs, setSubs] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/subscribe').then(r => r.json()).then(data => { setSubs(data); setLoading(false) })
  }, [])

  if (loading) return <div className="text-center py-20 text-gray-400">Loading...</div>

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Newsletter Subscribers</h1>
      <p className="text-gray-500 mb-6">{subs.length} active subscribers</p>

      {subs.length === 0 ? (
        <p className="text-gray-400 text-center py-20">No subscribers yet</p>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Email</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Subscribed</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {subs.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 flex items-center gap-3">
                    <FaEnvelope className="text-gray-400" />
                    <span className="font-medium">{s.email}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-3 py-1 rounded-full font-medium ${s.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {s.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{new Date(s.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
