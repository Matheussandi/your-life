import { NewDoctorForm } from '@/components/NewDoctorForm'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NewMemory() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-16">
      <Link
        href="/clinic/doctors"
        className="flex items-center gap-1 hover:text-gray-500"
      >
        <ChevronLeft className="h-6 w-6" />
        Voltar
      </Link>

      <NewDoctorForm />
    </div>
  )
}
