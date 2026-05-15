'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function NewBlogPost() {
  const router = useRouter()
  const [form, setForm] = useState({
    title: '', slug: '', excerpt: '', content: '', category: '', image: '', author: 'Admin',
  })
  const [published, setPublished] = useState(false)
  const [loading, setLoading] = useState(false)

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, slug: form.slug || generateSlug(form.title), published }),
    })

    const data = await res.json()
    if (data.success) {
      toast.success('Post created!')
      router.push('/admin/blog')
    } else {
      toast.error(data.error || 'Failed to create post')
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">New Blog Post</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-8 max-w-3xl space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
          <input
            type="text" value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value, slug: generateSlug(e.target.value) })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
          <input
            type="text" value={form.slug}
            onChange={(e) => setForm({ ...form, slug: e.target.value })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt</label>
          <textarea
            rows={2} value={form.excerpt}
            onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content *</label>
          <textarea
            rows={12} value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary font-mono text-sm"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input
              type="text" value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary"
              placeholder="Security Tips"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="text" value={form.image}
              onChange={(e) => setForm({ ...form, image: e.target.value })}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-secondary"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox" id="published" checked={published}
            onChange={(e) => setPublished(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-secondary focus:ring-secondary"
          />
          <label htmlFor="published" className="text-sm font-medium text-gray-700">Publish immediately</label>
        </div>

        <div className="flex gap-4">
          <button type="submit" disabled={loading} className="bg-secondary text-primary px-6 py-2 rounded-lg font-semibold hover:bg-secondary-light transition-colors disabled:opacity-50">
            {loading ? 'Saving...' : 'Save Post'}
          </button>
          <button type="button" onClick={() => router.back()} className="px-6 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
