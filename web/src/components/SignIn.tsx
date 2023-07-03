import { User } from 'lucide-react'

export function SignIn() {
  return (
    <>
      <div className="h-120 w-120 mb-4 flex items-center justify-center rounded-full bg-gray-400">
        <User className="h-60 w-60 text-gray-500" />
      </div>

      <p className="mb-8 text-center text-xl font-bold">
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
          className="transition-colors hover:text-gray-300"
        >
          <span className="underline">Crie sua conta</span>
        </a>
      </p>
    </>
  )
}
