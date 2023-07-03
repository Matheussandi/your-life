import { EmptyMemories } from '@/components/EmptyMemories'
import { cookies } from 'next/headers'
import { api } from '@/lib/api'

import ptBr from 'dayjs/locale/pt-br'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

import { FiSearch, FiFilter, FiPlus } from 'react-icons/fi'
import { EmptyCookies } from '@/components/EmptyCookies'

dayjs.locale(ptBr)

interface Doctor {
  id: string
  coverUrl: string
  name: string
  about: string
  email: string
  crm: string
  specialization: string
  createdAt: string
}

export default async function Doctors() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyCookies />
  }

  const token = cookies().get('token')?.value
  const response = await api.get('/doctors', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const doctors: Doctor[] = response.data

  if (doctors.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex-grow p-10">
      <div className="bg-gray-50 p-7">
        <div className="mb-4 flex items-center justify-between">
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Buscar médico"
              className="w-full rounded-lg border border-gray-300 p-2 pr-8"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <FiSearch color="#0079FF" size={20} />
            </div>
          </div>
          <div className="flex items-center">
            <FiFilter className="mr-2" color="#0079FF" size={20} />
            <Link href="clinic/doctors/new">
              <FiPlus className="mr-2" color="#0079FF" size={20} />
            </Link>
          </div>
        </div>

        {/* Listagem de médicos */}
        <div className="mt-7 border-t border-gray-300">
          <div className="-mx-2 mt-7 flex flex-wrap">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="mb-4 w-1/2 px-2 md:w-1/3 lg:w-1/4 xl:w-1/6"
              >
                <Link
                  href={`clinic/doctors/${doctor.id}`}
                  className="h-150 w-200 flex flex-col items-center rounded-lg border border-gray-300"
                >
                  <div className="flex h-32 w-full items-center justify-center rounded-lg bg-blue-300">
                    {/* Sem imagem por enquanto */}
                    <Image
                      src={doctor.coverUrl}
                      alt={doctor.name}
                      width={200}
                      height={150}
                      className="h-full w-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-center text-base font-bold">
                      {doctor.name}
                    </h3>
                    <p className="text-center text-sm text-gray-500">
                      {doctor.specialization}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
