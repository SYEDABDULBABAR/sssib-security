import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const existing = await prisma.subscriber.findUnique({ where: { email } })
    if (existing) {
      if (!existing.active) {
        await prisma.subscriber.update({
          where: { email },
          data: { active: true },
        })
        return NextResponse.json({ success: true, message: 'Subscription reactivated' })
      }
      return NextResponse.json({ success: true, message: 'Already subscribed' })
    }

    await prisma.subscriber.create({ data: { email } })
    return NextResponse.json({ success: true, message: 'Subscribed successfully' })
  } catch (error) {
    console.error('Subscribe error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  const subscribers = await prisma.subscriber.findMany({
    where: { active: true },
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(subscribers)
}
