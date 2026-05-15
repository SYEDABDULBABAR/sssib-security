import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const hashedPassword = await bcrypt.hash('admin123', 12)

  const admin = await prisma.admin.upsert({
    where: { email: 'admin@secureguardpro.co.uk' },
    update: {},
    create: {
      email: 'admin@secureguardpro.co.uk',
      name: 'Admin',
      password: hashedPassword,
      role: 'admin',
    },
  })

  console.log('Admin created:', admin.email)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
