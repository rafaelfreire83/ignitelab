import { Footer } from "../components/Footer";
import { Logo } from "../components/Logo";

export function Subscribe() {
  return (
    <div className="flex flex-col content-center min-h-screen bg-blur bg-cover bg-no-repeat">
      <main className="flex flex-col w-[1280px] px-8 m-auto pt-[80px]">
        <div className="flex justify-between items-center gap-8">
          <div className="w-full max-w-2xl leading-relaxed">
            <Logo />
            <h1 className="block text-4xl mt-9 child:text-blue-500">Construa uma <b>aplicação completa</b>, do zero, com <b>React JS</b></h1>
            <p className="text-gray-300 mt-6">Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.</p>
          </div>
          <div className="w-[390px] bg-gray-700 p-8 border border-gray-600 rounded">
            <form action="#" className="gap-2 flex flex-1 flex-col">
              <span className="font-semibold text-2xl mb-5">Inscreva-se gratuitamente</span>
              <input type="text" name="name" placeholder="Seu nome completo"
                className="bg-black rounded p-5 placeholder:text-gray-500"
              />
              <input type="email" name="email" placeholder="Digite seu email"
                className="bg-black rounded p-5 placeholder:text-gray-500"
              />
              <button type="submit"
                className="bg-green-500 rounded mt-2 p-5"
              >Garantir minha vaga</button>
            </form>
          </div>
        </div>

        <div>
          <img src="/src/assets/panel-code.png" alt="Panel code" />
        </div>
      </main>

      <Footer />
    </div>
  )
}