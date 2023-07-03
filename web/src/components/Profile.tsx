import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div>
      <Image
        src={avatarUrl}
        width={120}
        height={120}
        alt=""
        className="w-120 h-120 mx-auto mb-4 rounded-full"
      />

      <p className="mb-8 text-center text-xl font-bold">{name}</p>
    </div>
  )
}
