import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const approved = searchParams.get('approved')

  const where = approved === 'true' ? { approved: true } : {}

  const testimonials = await prisma.testimonial.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(testimonials)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, company, role, content, rating } = body

    if (!name || !content || !rating) {
      return NextResponse.json({ error: 'Name, content, and rating are required' }, { status: 400 })
    }

    const testimonial = await prisma.testimonial.create({
      data: { name, company, role, content, rating: parseInt(rating) },
    })

    return NextResponse.json({ success: true, testimonial })
  } catch (error) {
    console.error('Testimonial error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
