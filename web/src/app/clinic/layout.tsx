import { ReactNode } from 'react'

import { AiFillHome, AiFillTool } from 'react-icons/ai'
import { BsFillFilePersonFill, BsShieldFillCheck } from 'react-icons/bs'
import Link from 'next/link'
import { Profile } from '@/components/Profile'
import { SignIn } from '@/components/SignIn'
import { cookies } from 'next/headers'

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const isAuthenticated = cookies().has('token')

  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex w-72 flex-col rounded-lg bg-gray-50 shadow-md">
        <div className="p-4">
          {isAuthenticated ? <Profile /> : <SignIn />}

          <nav className="border-t border-gray-300">
            <ul className="mt-5 list-none">
              <Link
                href="/clinic"
                className="flex items-center py-2 hover:text-blue-500"
              >
                <AiFillHome className="mr-2" size={20} />
                <span>Início</span>
              </Link>
              <Link
                href="/clinic/doctors"
                className="flex items-center py-2 hover:text-blue-500"
              >
                <BsFillFilePersonFill className="mr-2" size={20} />
                <span>Médicos</span>
              </Link>
              <Link
                href="/clinic/settings"
                className="flex items-center py-2 hover:text-blue-500"
              >
                <AiFillTool className="mr-2" size={20} />
                <span>Configurações</span>
              </Link>
              <Link
                href="/clinic/plans"
                className="flex items-center py-2 hover:text-blue-500"
              >
                <BsShieldFillCheck className="mr-2" size={20} />
                <span>Planos</span>
              </Link>
            </ul>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Link href="/api/auth/logout">
            <button className="w-full rounded bg-red-500 px-4 py-2 text-white">
              Sair
            </button>
          </Link>
        </div>
      </div>
      <div className="flex-grow bg-white">{children}</div>
    </div>
  )
}
