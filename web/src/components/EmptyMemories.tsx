export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[360px] text-center leading-relaxed">
        Você ainda não registrou nenhum médico,{' '}
        <a href="./doctors/new" className="underline hover:text-gray-500">
          registre agora !
        </a>
      </p>
    </div>
  )
}
