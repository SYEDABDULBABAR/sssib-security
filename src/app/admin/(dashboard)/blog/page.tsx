'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaPlus, FaEdit, FaTrash, FaExternalLinkAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'

interface BlogPost {
  id: string
  title: string
  slug: string
  category: string
  published: boolean
  createdAt: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/blog').then(r => r.json()).then(data => { setPosts(data); setLoading(false) })
  }, [])

  const togglePublish = async (id: string, published: boolean) => {
    await fetch(`/api/blog/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ published: !published }),
    })
    const data = await fetch('/api/blog').then(r => r.json())
    setPosts(data)
    toast.success(published ? 'Unpublished' : 'Published')
  }

  const deletePost = async (id: string) => {
    if (!confirm('Delete this post?')) return
    await fetch(`/api/blog/${id}`, { method: 'DELETE' })
    const data = await fetch('/api/blog').then(r => r.json())
    setPosts(data)
    toast.success('Deleted')
  }

  if (loading) return <div className="text-center py-20 text-gray-400">Loading...</div>

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-primary">Blog Posts</h1>
        <Link href="/admin/blog/new" className="flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-lg font-semibold hover:bg-secondary-light transition-colors">
          <FaPlus /> New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-gray-400 text-center py-20">No blog posts yet</p>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Title</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Category</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Status</th>
                <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">Date</th>
                <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="font-medium text-primary">{post.title}</p>
                    <p className="text-xs text-gray-400">/{post.slug}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">{post.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => togglePublish(post.id, post.published)}
                      className={`text-xs px-3 py-1 rounded-full font-medium ${post.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}
                    >
                      {post.published ? 'Published' : 'Draft'}
                    </button>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{new Date(post.createdAt).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/blog/edit/${post.id}`} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                        <FaEdit />
                      </Link>
                      <button onClick={() => deletePost(post.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
