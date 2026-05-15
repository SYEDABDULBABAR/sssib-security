import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, position, experience, coverLetter, resumeUrl } = body

    if (!name || !email || !phone || !position) {
      return NextResponse.json({ error: 'Name, email, phone, and position are required' }, { status: 400 })
    }

    const application = await prisma.careerApplication.create({
      data: { name, email, phone, position, experience, coverLetter, resumeUrl },
    })

    return NextResponse.json({ success: true, application })
  } catch (error) {
    console.error('Career application error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET() {
  const applications = await prisma.careerApplication.findMany({
    orderBy: { createdAt: 'desc' },
  })
  return NextResponse.json(applications)
}
