'use client'

import { useEffect, useState } from 'react'
import { FaTrash, FaCheck, FaStar } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  approved: boolean
  createdAt: string
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/testimonials').then(r => r.json()).then(data => { setTestimonials(data); setLoading(false) })
  }, [])

  const toggleApproval = async (id: string, approved: boolean) => {
    await fetch(`/api/testimonials/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ approved: !approved }),
    })
    const data = await fetch('/api/testimonials').then(r => r.json())
    setTestimonials(data)
    toast.success(approved ? 'Unapproved' : 'Approved')
  }

  const deleteTestimonial = async (id: string) => {
    if (!confirm('Delete this testimonial?')) return
    await fetch(`/api/testimonials/${id}`, { method: 'DELETE' })
    const data = await fetch('/api/testimonials').then(r => r.json())
    setTestimonials(data)
    toast.success('Deleted')
  }

  if (loading) return <div className="text-center py-20 text-gray-400">Loading...</div>

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Testimonials</h1>

      {testimonials.length === 0 ? (
        <p className="text-gray-400 text-center py-20">No testimonials yet</p>
      ) : (
        <div className="space-y-4">
          {testimonials.map((t) => (
            <div key={t.id} className={`bg-white rounded-xl border p-6 ${!t.approved ? 'border-yellow-300 bg-yellow-50/30' : 'border-gray-100'}`}>
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-primary">{t.name}</h3>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar key={i} className={i < t.rating ? 'text-yellow-400 text-xs' : 'text-gray-200 text-xs'} />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">{t.role} at {t.company}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => toggleApproval(t.id, t.approved)} className={`p-2 rounded-lg transition-colors ${t.approved ? 'text-green-600 hover:bg-green-50' : 'text-gray-400 hover:bg-gray-100'}`} title={t.approved ? 'Unapprove' : 'Approve'}>
                    <FaCheck />
                  </button>
                  <button onClick={() => deleteTestimonial(t.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                    <FaTrash />
                  </button>
                </div>
              </div>
              <p className="text-gray-700 italic">&ldquo;{t.content}&rdquo;</p>
              <p className="text-xs text-gray-400 mt-3">{new Date(t.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
