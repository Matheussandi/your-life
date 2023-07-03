'use client'

import { Camera } from 'lucide-react'
import { MediaPicker } from './MediaPicker'
import { FormEvent, useEffect } from 'react'
import Cookie from 'js-cookie'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'

export function NewDoctorForm() {
  const router = useRouter()

  async function handleCreateDoctor(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('coverUrl')

    console.log(fileToUpload)

    let coverUrl = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)

      console.log(uploadResponse)

      coverUrl = uploadResponse.data.fileUrl
    }

    const token = Cookie.get('token')

    await api.post(
      '/doctors',
      {
        name: formData.get('name'),
        about: formData.get('about'),
        email: formData.get('email'),
        crm: formData.get('crm'),
        specialization: formData.get('specialization'),
        coverUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    router.push('/clinic/doctors')
  }

  // It's only pre-rendering the first Doctor
  useEffect(() => {}, [])

  return (
    <form onSubmit={handleCreateDoctor} className="flex flex-1 flex-col gap-2">
      <div className="flex items-center gap-4">
        <label
          htmlFor="media"
          className="flex cursor-pointer items-center gap-1.5 hover:text-primary"
        >
          <Camera className="h-4 w-4" />
          Adicionar foto ou vídeo de capa
        </label>
      </div>

      <div className="flex items-center justify-center">
        <MediaPicker />
      </div>

      <label className="flex flex-col">
        <span className="text-lg font-medium">Nome:</span>
        <input
          type="text"
          name="name"
          className="rounded-lg border border-gray-300 px-4 py-2"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-lg font-medium">Especialização:</span>
        <input
          type="text"
          name="specialization"
          className="rounded-lg border border-gray-300 px-4 py-2"
        />
      </label>

      <label>
        <span className="text-lg font-medium">Sobre:</span>
        <textarea
          name="about"
          spellCheck={false}
          className="w-full flex-1 resize-none rounded-lg border border-gray-300 px-4 py-2"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-lg font-medium">Email:</span>
        <input
          type="text"
          name="email"
          className="rounded-lg border border-gray-300 px-4 py-2"
        />
      </label>

      <label className="flex flex-col">
        <span className="text-lg font-medium">CRM:</span>
        <input
          type="text"
          name="crm"
          className="rounded-lg border border-gray-300 px-4 py-2"
        />
      </label>

      <button
        className="mt-3 inline-block self-end rounded-lg bg-primary px-5 py-3 font-bold uppercase leading-none text-white hover:bg-blue-500"
        type="submit"
      >
        Salvar
      </button>
    </form>
  )
}
