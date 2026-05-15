import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const published = searchParams.get('published')

  const where = published === 'true' ? { published: true } : {}

  const posts = await prisma.blogPost.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  })

  return NextResponse.json(posts)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, slug, excerpt, content, category, image, author, published } = body

    if (!title || !slug || !content) {
      return NextResponse.json({ error: 'Title, slug, and content are required' }, { status: 400 })
    }

    const existing = await prisma.blogPost.findUnique({ where: { slug } })
    if (existing) {
      return NextResponse.json({ error: 'A post with this slug already exists' }, { status: 409 })
    }

    const post = await prisma.blogPost.create({
      data: { title, slug, excerpt, content, category, image, author, published: published ?? false },
    })

    return NextResponse.json({ success: true, post })
  } catch (error) {
    console.error('Blog create error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
