import { prisma } from '@/lib/prisma'
import Link from 'next/link'
import { FaEnvelope, FaFileInvoiceDollar, FaBlog, FaUsers, FaNewspaper, FaStar, FaComments } from 'react-icons/fa'

export default async function DashboardPage() {
  const [totalContacts, totalQuotes, totalBlogPosts, totalApplications, totalSubscribers, totalTestimonials, totalMessages, recentContacts, recentQuotes] = await Promise.all([
    prisma.contact.count(),
    prisma.quoteRequest.count(),
    prisma.blogPost.count(),
    prisma.careerApplication.count(),
    prisma.subscriber.count({ where: { active: true } }),
    prisma.testimonial.count(),
    prisma.chatMessage.count({ where: { read: false, isAdmin: false } }),
    prisma.contact.findMany({ take: 5, orderBy: { createdAt: 'desc' } }),
    prisma.quoteRequest.findMany({ take: 5, orderBy: { createdAt: 'desc' } }),
  ])

  const cards = [
    { label: 'Contact Messages', value: totalContacts, icon: FaEnvelope, href: '/admin/contacts', color: 'bg-blue-500' },
    { label: 'Quote Requests', value: totalQuotes, icon: FaFileInvoiceDollar, href: '/admin/quotes', color: 'bg-green-500' },
    { label: 'Blog Posts', value: totalBlogPosts, icon: FaBlog, href: '/admin/blog', color: 'bg-purple-500' },
    { label: 'Applications', value: totalApplications, icon: FaUsers, href: '/admin/applications', color: 'bg-orange-500' },
    { label: 'Subscribers', value: totalSubscribers, icon: FaNewspaper, href: '/admin/subscribers', color: 'bg-pink-500' },
    { label: 'Testimonials', value: totalTestimonials, icon: FaStar, href: '/admin/testimonials', color: 'bg-yellow-500' },
    { label: 'Unread Chats', value: totalMessages, icon: FaComments, href: '/admin/messages', color: 'bg-red-500' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Link key={card.href} href={card.href} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center text-white`}>
                  <Icon className="text-xl" />
                </div>
                <span className="text-3xl font-bold text-primary">{card.value}</span>
              </div>
              <p className="text-gray-600 font-medium">{card.label}</p>
            </Link>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-primary mb-4">Recent Contacts</h2>
          {recentContacts.length === 0 ? (
            <p className="text-gray-400">No contacts yet</p>
          ) : (
            <div className="space-y-3">
              {recentContacts.map((c) => (
                <div key={c.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">
                    {c.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{c.name}</p>
                    <p className="text-xs text-gray-500">{c.email}</p>
                    <p className="text-xs text-gray-400 truncate">{c.message}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${c.status === 'new' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                    {c.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h2 className="text-xl font-bold text-primary mb-4">Recent Quotes</h2>
          {recentQuotes.length === 0 ? (
            <p className="text-gray-400">No quote requests yet</p>
          ) : (
            <div className="space-y-3">
              {recentQuotes.map((q) => (
                <div key={q.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">
                    {q.name[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm truncate">{q.name}</p>
                    <p className="text-xs text-gray-500">{q.service}</p>
                    <p className="text-xs text-gray-400">{q.email}</p>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded-full ${q.status === 'new' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                    {q.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
