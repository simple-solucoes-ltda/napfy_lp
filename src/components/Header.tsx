'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import { AppStoreLink } from '@/components/AppStoreLink'
import { trackNavClick } from '@/lib/analytics'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PopoverButton<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <PopoverButton
      as={Link}
      className="block text-base/7 tracking-tight text-gray-200 hover:text-white"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <PopoverButton
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-white p-2 hover:bg-white/20 hover:stroke-gray-200 focus:not-data-focus:outline-hidden active:stroke-white"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </PopoverButton>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <PopoverBackdrop
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-black/80 backdrop-blur-sm"
                        />
                        <PopoverPanel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl px-6 pt-32 pb-6 shadow-2xl shadow-gray-900/20"
                          style={{
                            background: '#0F1629'
                          }}
                        >
                          <div className="space-y-4">
                            <MobileNavLink
                              href="/#features"
                              onClick={() => trackNavClick('Funcionalidades', 'mobile')}
                            >
                              Funcionalidades
                            </MobileNavLink>
                            <MobileNavLink
                              href="/#faqs"
                              onClick={() => trackNavClick('Dúvidas', 'mobile')}
                            >
                              Dúvidas
                            </MobileNavLink>
                            <MobileNavLink
                              href="/terms"
                              onClick={() => trackNavClick('Termos', 'mobile')}
                            >
                              Termos
                            </MobileNavLink>
                            <MobileNavLink
                              href="/privacy"
                              onClick={() => trackNavClick('Privacidade', 'mobile')}
                            >
                              Privacidade
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <AppStoreLink color="black" location="header_mobile" />
                          </div>
                        </PopoverPanel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <div className="flex items-center gap-6 max-lg:hidden">
              <AppStoreLink color="black" location="header_desktop" />
            </div>
          </div>
        </Container>
      </nav>
    </header>
  )
}
