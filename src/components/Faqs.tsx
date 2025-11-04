'use client'

import { Container } from '@/components/Container'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { trackFaqExpand, trackContactClick } from '@/lib/analytics'

const faqs = [
  {
    question: 'Como funciona o teste grátis de 3 dias?',
    answer:
      'Você pode usar todas as funcionalidades por 3 dias. Se cancelar durante o teste, não é cobrado nada. Se não cancelar, a cobrança acontece automaticamente após os 3 dias.',
  },
  {
    question: 'Funciona para recém-nascidos?',
    answer:
      'SIM! O Napfy funciona desde o nascimento até os 3 anos. Para recém-nascidos, o app ajuda você a identificar padrões desde cedo e estabelecer uma rotina gradualmente.',
  },
  {
    question: 'É difícil de usar?',
    answer:
      'Não! São apenas 2 botões: "Acordar" e "Dormir". Leva 2 segundos para registrar. O app faz todo o resto automaticamente.',
  },
  {
    question: 'Quanto tempo leva para ver resultados?',
    answer:
      'A maioria das mães relata melhora em 3-5 dias. O bebê precisa de alguns dias para se adaptar à rotina mais consistente.',
  },
  {
    question: 'Funciona offline?',
    answer:
      'SIM! As principais funcionalidades funcionam offline. Você pode registrar sonos e receber lembretes sem internet.',
  },
  {
    question: 'Os dados são seguros?',
    answer:
      'ABSOLUTAMENTE! Criptografia de ponta a ponta. NUNCA compartilhamos com terceiros.',
  },
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-white/20 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-4xl">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-white sm:text-4xl"
          >
            Perguntas frequentes
          </h2>

          <div className="mt-16 space-y-6">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="rounded-2xl border border-teal-500/40 bg-teal-900/40 transition-colors hover:bg-teal-900/60">
                    <DisclosureButton
                      className="flex w-full items-center justify-between px-6 py-6 text-left"
                      onClick={() => {
                        if (!open) {
                          trackFaqExpand(faq.question, index)
                        }
                      }}
                    >
                      <span className="text-lg font-semibold text-white">
                        {faq.question}
                      </span>
                      <svg
                        className={`h-6 w-6 flex-shrink-0 text-teal-400 transition-transform ${
                          open ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </DisclosureButton>
                    <DisclosurePanel className="px-6 pb-6 pt-0">
                      <p className="text-base text-gray-300">{faq.answer}</p>
                    </DisclosurePanel>
                  </div>
                )}
              </Disclosure>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-gray-300">
              Se você tiver outras dúvidas,{' '}
              <a
                href="mailto:hello@napfy.co"
                className="text-gray-300 underline transition-colors hover:text-white"
                onClick={() => trackContactClick('hello@napfy.co')}
              >
                entre em contato
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}