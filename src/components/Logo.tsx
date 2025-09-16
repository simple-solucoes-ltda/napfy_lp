import Image from 'next/image'
import napfyLogo from '@/images/logo.png'

export function Logomark(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className="h-10 w-10 relative">
      <Image
        src={napfyLogo}
        alt="Napfy"
        width={40}
        height={40}
        className="object-contain"
      />
    </div>
  )
}

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props} className="flex items-center gap-2">
      <Image
        src={napfyLogo}
        alt="Napfy"
        width={48}
        height={48}
        className="object-contain"
      />
      <span className="text-2xl font-semibold text-white">Napfy</span>
    </div>
  )
}