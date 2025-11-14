import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="border-t border-white/20 text-white">
        <div className="flex flex-col items-center border-t border-white/20 pt-8 pb-12 md:justify-between md:pt-6">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} Napfy. Todos os direitos reservados.
          </p>
        </div>
    </footer>
  )
}