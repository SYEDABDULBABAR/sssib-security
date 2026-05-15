'use client'

import { useEffect, useState } from 'react'
import { FaTrash, FaDownload, FaEnvelope, FaPhone } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface Application {
  id: string
  name: string
  email: string
  phone: string
  position: string
  experience: string
  coverLetter: string | null
  resumeUrl: string | null
  status: string
  createdAt: string
}

export default function ApplicationsPage() {
  const [apps, setApps] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/careers').then(r => r.json()).then(data => { setApps(data); setLoading(false) })
  }, [])

  const updateStatus = async (id: string, status: string) => {
    await fetch(`/api/careers`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, status }),
    })
    const data = await fetch('/api/careers').then(r => r.json())
    setApps(data)
    toast.success('Status updated')
  }

  if (loading) return <div className="text-center py-20 text-gray-400">Loading...</div>

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Career Applications</h1>

      {apps.length === 0 ? (
        <p className="text-gray-400 text-center py-20">No applications yet</p>
      ) : (
        <div className="space-y-4">
          {apps.map((a) => (
            <div key={a.id} className="bg-white rounded-xl border border-gray-100 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-primary text-lg">{a.name}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mt-1">
                    <span className="flex items-center gap-1"><FaEnvelope /> {a.email}</span>
                    <span className="flex items-center gap-1"><FaPhone /> {a.phone}</span>
                  </div>
                  <span className="inline-block mt-2 text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">{a.position}</span>
                  <span className="inline-block mt-2 ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{a.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={a.status}
                    onChange={(e) => updateStatus(a.id, e.target.value)}
                    className="text-sm border border-gray-200 rounded-lg px-2 py-1 bg-white"
                  >
                    <option value="new">New</option>
                    <option value="reviewed">Reviewed</option>
                    <option value="interviewed">Interviewed</option>
                    <option value="hired">Hired</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  {a.resumeUrl && (
                    <a href={a.resumeUrl} download className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Download Resume">
                      <FaDownload />
                    </a>
                  )}
                </div>
              </div>
              {a.coverLetter && <p className="text-gray-700 whitespace-pre-wrap text-sm">{a.coverLetter}</p>}
              <p className="text-xs text-gray-400 mt-3">{new Date(a.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
