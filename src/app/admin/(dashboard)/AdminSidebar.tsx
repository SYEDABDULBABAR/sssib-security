'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { signOut } from 'next-auth/react'
import { useState } from 'react'
import {
  FaTachometerAlt, FaEnvelope, FaFileInvoiceDollar, FaBlog,
  FaUsers, FaNewspaper, FaStar, FaComments, FaSignOutAlt,
  FaBars, FaTimes, FaUserShield
} from 'react-icons/fa'

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: FaTachometerAlt },
  { label: 'Contacts', href: '/admin/contacts', icon: FaEnvelope },
  { label: 'Quote Requests', href: '/admin/quotes', icon: FaFileInvoiceDollar },
  { label: 'Blog Posts', href: '/admin/blog', icon: FaBlog },
  { label: 'Applications', href: '/admin/applications', icon: FaUsers },
  { label: 'Subscribers', href: '/admin/subscribers', icon: FaNewspaper },
  { label: 'Testimonials', href: '/admin/testimonials', icon: FaStar },
  { label: 'Live Chat', href: '/admin/messages', icon: FaComments },
]

export default function AdminSidebar({ user }: { user: any }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-primary text-white p-2 rounded-lg"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-primary text-white transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-6 border-b border-white/10">
          <Link href="/admin/dashboard" className="flex items-center gap-3">
            <img src="/logo-icon.svg" alt="SSSIB" className="h-10 w-auto" />
            <div>
              <p className="font-bold text-sm leading-tight">SHARK SECURITY</p>
              <p className="text-[10px] text-secondary font-semibold tracking-wider">SSSIB</p>
              <p className="text-xs text-gray-400">Admin Panel</p>
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive ? 'bg-secondary text-primary font-semibold' : 'text-gray-300 hover:bg-white/10'}`}
              >
                <Icon />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-white/10">
          <div className="flex items-center gap-3 px-4 py-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary font-bold text-sm">
              {user.name?.[0]?.toUpperCase()}
            </div>
            <div className="text-sm">
              <p className="font-medium truncate">{user.name}</p>
              <p className="text-xs text-gray-400 truncate">{user.email}</p>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: '/admin/login' })}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-500/20 hover:text-red-400 transition-colors w-full"
          >
            <FaSignOutAlt />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  )
}
