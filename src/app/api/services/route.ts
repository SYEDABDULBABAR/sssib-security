import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const active = searchParams.get('active')

  const where = active === 'true' ? { active: true } : {}

  const services = await prisma.serviceModel.findMany({
    where,
    orderBy: { order: 'asc' },
  })

  return NextResponse.json(services)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, description, icon, order } = body

    if (!title || !description) {
      return NextResponse.json({ error: 'Title and description are required' }, { status: 400 })
    }

    const service = await prisma.serviceModel.create({
      data: { title, description, icon, order: order ?? 0 },
    })

    return NextResponse.json({ success: true, service })
  } catch (error) {
    console.error('Service create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
