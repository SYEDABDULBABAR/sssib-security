import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import AdminSidebar from './AdminSidebar'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session?.user) redirect('/admin/login')

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar user={session.user} />
      <main className="flex-1 lg:ml-64 p-4 lg:p-8 pt-16 lg:pt-8">{children}</main>
    </div>
  )
}
