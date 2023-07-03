export function Footer() {
  return (
    <footer className="py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between gap-x-6 lg:flex-nowrap">
          <div className="mb-4 w-full lg:mb-0 lg:w-1/2">
            <h2 className="text-primary mb-2 text-xl font-bold">+Sua Vida</h2>
            <p className="mr-0 text-justify lg:mr-12">
              Este aplicativo gratuito fornece uma solução para suas
              necessidades de saúde, oferecendo a você acesso único às
              informações de agendamento, consultas e exames médicos.
            </p>
          </div>
          <div className="w-full">
            <div className="flex flex-wrap justify-between gap-2">
              <div className="mb-4 flex w-full flex-col gap-2 md:w-1/2 lg:mb-0 lg:w-auto">
                <h3 className="mb-2 text-lg font-bold">Sobre</h3>
                <a href="#" className="hover:text-primary">
                  Home
                </a>
                <a href="#" className="hover:text-primary">
                  Política de Privacidade
                </a>
                <a href="#" className="hover:text-primary">
                  Termos e condições
                </a>
              </div>
              <div className="mb-4 flex w-full flex-col gap-2 md:w-1/2 lg:mb-0 lg:w-auto">
                <h3 className="mb-2 text-lg font-bold">Clínicas</h3>
                <a href="#" className="hover:text-primary">
                  Serviços
                </a>
                <a href="#" className="hover:text-primary">
                  Gerencia consultas
                </a>
              </div>
              <div className="mb-4 flex w-full flex-col gap-2 md:w-1/2 lg:mb-0 lg:w-auto">
                <h3 className="mb-2 text-lg font-bold">Pacientes</h3>
                <a href="#" className="hover:text-primary">
                  Cookies
                </a>
                <a href="#" className="hover:text-primary">
                  Encontre médicos
                </a>
              </div>
              <div className="flex w-full flex-col gap-2 md:w-1/2 lg:w-auto">
                <h3 className="mb-2 text-lg font-bold">Baixe o app</h3>
                <div className="flex flex-col gap-2 ">
                  <a href="#" className="hover:text-primary mr-2">
                    Google Play Store
                  </a>
                  <a href="#" className="hover:text-primary">
                    App Stores
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
