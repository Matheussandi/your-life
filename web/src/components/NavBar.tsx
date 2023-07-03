'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

import LogoImg from '../../public/logo.png'

export function NavBar() {
  const [expanded, setExpanded] = useState(false)

  const toggleNavbar = () => {
    setExpanded(!expanded)
  }

  return (
    <div>
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image src={LogoImg} width={60} height={60} alt="+Sua Vida" />
        </Link>

        <ul className="hidden sm:flex">
          <li className="hover:text-primary p-4">
            <Link href="/">Sobre</Link>
          </li>
          <li className="hover:text-primary p-4">
            <Link href="/">Clínicas</Link>
          </li>
          <li className="hover:text-primary p-4">
            <Link href="/">Pacientes</Link>
          </li>
          <li className="hover:text-primary p-4">
            <Link href="/">Contato</Link>
          </li>
          <button className="bg-primary my-2 rounded-xl px-4 transition-colors duration-300 hover:bg-[#136edd]">
            <Link className="text-white" href="/clinic">
              Entrar
            </Link>
          </button>
        </ul>

        {/* Mobile Button */}
        <div onClick={toggleNavbar} className="z-10 block sm:hidden ">
          {expanded ? (
            <AiOutlineClose size={20} color="#0079FF" />
          ) : (
            <AiOutlineMenu size={20} color="#0079FF" />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            expanded
              ? 'absolute bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-transparent text-center duration-300 ease-in sm:hidden'
              : 'absolute bottom-0 left-[-100%] right-0 top-0 flex h-screen w-full items-center justify-center bg-transparent text-center duration-300 ease-in sm:hidden'
          }
        >
          <ul>
            <li className="hover:text-primary p-4 text-xl">
              <Link href="/">Sobre</Link>
            </li>
            <li className="hover:text-primary p-4 text-xl">
              <Link href="/">Clínicas</Link>
            </li>
            <li className="hover:text-primary p-4 text-xl">
              <Link href="/">Pacientes</Link>
            </li>
            <li className="hover:text-primary p-4 text-xl">
              <Link href="/">Contato</Link>
            </li>
            <button className="bg-primary rounded-xl p-4 text-xl transition-colors duration-300 hover:bg-[#136edd]">
              <Link className="text-white" href="/clinic">
                Entrar
              </Link>
            </button>
          </ul>
        </div>
      </div>
    </div>
  )
}
