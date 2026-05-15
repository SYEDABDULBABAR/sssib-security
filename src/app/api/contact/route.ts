import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, company, message, service } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    const contact = await prisma.contact.create({
      data: { name, email, phone, company, message, service },
    })

    return NextResponse.json({ success: true, contact })
  } catch (error) {
    console.error('Contact error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const status = searchParams.get('status')

  const where = status ? { status } : {}

  const contacts = await prisma.contact.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(contacts)
}
