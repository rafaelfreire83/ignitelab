import { LogoRocketseat } from "./LogoRocketseat";

export function Footer() {
  return (
    <footer className="w-full p-6 flex justify-between align-center bg-gray-700 border-t border-gray-600">
      <div className="flex items-center gap-4">
        <LogoRocketseat />
        <span className="text-gray-300">Rocketseat - Todos os direitos reservados</span>
      </div>

      <a href="#" className="text-gray-300">Políticas de privacidade</a>
    </footer>
  )
}