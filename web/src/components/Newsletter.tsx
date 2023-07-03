import { FaPaperPlane } from 'react-icons/fa'

export function Newsletter() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-primary flex flex-col items-center rounded-3xl px-8 py-12 md:px-64 md:py-24">
        <h2 className="text-center text-2xl font-bold text-white md:text-4xl">
          Inscreva-se na nossa Newsletter
        </h2>
        <p className="mb-5 text-center text-white">
          Receba as últimas notícias e atualizações diretamente em seu e-mail.
        </p>
        <form className="flex flex-col">
          <div className="relative">
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="mb-4 w-full rounded-lg bg-white px-4 py-3 outline-none md:w-80 lg:w-96"
            />
            <button
              type="submit"
              className="bg-primary absolute right-0 top-0 mr-2 mt-2 rounded-lg px-4 py-2 text-white"
            >
              <FaPaperPlane />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
