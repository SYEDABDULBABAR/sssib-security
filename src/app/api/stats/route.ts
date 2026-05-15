import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const [
    totalContacts,
    totalQuotes,
    totalBlogPosts,
    totalApplications,
    totalSubscribers,
    totalTestimonials,
    recentContacts,
    recentQuotes,
  ] = await Promise.all([
    prisma.contact.count(),
    prisma.quoteRequest.count(),
    prisma.blogPost.count(),
    prisma.careerApplication.count(),
    prisma.subscriber.count({ where: { active: true } }),
    prisma.testimonial.count(),
    prisma.contact.findMany({ take: 5, orderBy: { createdAt: 'desc' } }),
    prisma.quoteRequest.findMany({ take: 5, orderBy: { createdAt: 'desc' } }),
  ])

  return NextResponse.json({
    stats: {
      totalContacts,
      totalQuotes,
      totalBlogPosts,
      totalApplications,
      totalSubscribers,
      totalTestimonials,
    },
    recentContacts,
    recentQuotes,
  })
}
