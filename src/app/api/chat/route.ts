import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const isAdmin = searchParams.get('admin')

  const where = isAdmin === 'true' ? {} : { read: false }

  const messages = await prisma.chatMessage.findMany({
    where,
    orderBy: { createdAt: 'asc' },
    take: 100,
  })

  return NextResponse.json(messages)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, isAdmin } = body

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const chatMessage = await prisma.chatMessage.create({
      data: { name, email, message, isAdmin: isAdmin ?? false },
    })

    return NextResponse.json({ success: true, message: chatMessage })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json()
    const { id } = body

    await prisma.chatMessage.update({
      where: { id },
      data: { read: true },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Chat update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
