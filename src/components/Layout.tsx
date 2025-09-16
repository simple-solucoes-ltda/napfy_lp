import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { StarsBackground } from '@/components/StarsBackground'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative min-h-screen"
      style={{
        background: 'linear-gradient(135deg, #0F1629 0%, #1E293A 30%, #0D9387 70%, #13B8A6 100%)'
      }}
    >
      <StarsBackground />
      <Header />
      <main className="flex-auto">{children}</main>
      <Footer />
    </div>
  )
}
