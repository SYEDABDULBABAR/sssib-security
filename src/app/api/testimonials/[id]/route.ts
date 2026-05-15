import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    const body = await req.json()
    const testimonial = await prisma.testimonial.update({
      where: { id },
      data: body,
    })
    return NextResponse.json({ success: true, testimonial })
  } catch (error) {
    console.error('Testimonial update error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params
    await prisma.testimonial.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Testimonial delete error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
