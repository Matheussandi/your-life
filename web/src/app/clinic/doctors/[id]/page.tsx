import { cookies } from 'next/headers'
import Image from 'next/image'

import { api } from '@/lib/api'

import ptBr from 'dayjs/locale/pt-br'
import dayjs from 'dayjs'

dayjs.locale(ptBr)

interface DoctorId {
  params: {
    id: string
  }
}

interface DoctorProps {
  id: string
  coverUrl: string
  name: string
  about: string
  email: string
  crm: string
  createdAt: string
}

export default async function Memory({ params }: DoctorId) {
  const token = cookies().get('token')?.value
  const response = await api.get(`/doctors/${params.id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const doctor: DoctorProps = response.data

  return (
    <div className="flex flex-col gap-10 p-8">
      <div key={doctor.id} className="space-y-4">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={doctor.coverUrl}
            width={40}
            height={40}
            alt={doctor.name}
            className="aspect-video h-40 w-40 rounded-full border-2 border-primary object-cover"
          />
          <p className="mt-4 text-2xl font-bold leading-relaxed">
            {doctor.name}
          </p>
        </div>

        <div>
          <h1 className="border-b-2 border-black text-xl font-bold">Sobre</h1>
          <p>{doctor.about}</p>
        </div>

        <div>
          <h1 className="border-b-2 border-black text-xl font-bold">Email</h1>
          <p>{doctor.email}</p>
        </div>

        <div>
          <h1 className="border-b-2 border-black text-xl font-bold">CRM</h1>
          <p>{doctor.crm}</p>
        </div>
      </div>
    </div>
  )
}
