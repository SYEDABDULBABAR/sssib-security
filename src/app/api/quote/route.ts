import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, company, service, details } = body

    if (!name || !email || !phone || !service) {
      return NextResponse.json({ error: 'Name, email, phone, and service are required' }, { status: 400 })
    }

    const quote = await prisma.quoteRequest.create({
      data: { name, email, phone, company, service, details },
    })

    return NextResponse.json({ success: true, quote })
  } catch (error) {
    console.error('Quote error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  const quotes = await prisma.quoteRequest.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(quotes)
}
