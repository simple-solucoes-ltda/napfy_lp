'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { AppScreen } from '@/components/AppScreen'

export function AppDemo() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [wakeTime, setWakeTime] = useState('07:00')
  const [babyAge, setBabyAge] = useState(4)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const calculateNextNap = () => {
    const [hours, minutes] = wakeTime.split(':').map(Number)
    const wake = new Date()
    wake.setHours(hours, minutes, 0, 0)

    const windowHours = babyAge <= 3 ? 1.5 : babyAge <= 6 ? 2 : 2.5
    const nextNap = new Date(wake.getTime() + windowHours * 60 * 60 * 1000)

    return nextNap
  }

  const nextNapTime = calculateNextNap()
  const timeUntilNap = Math.max(0, Math.floor((nextNapTime.getTime() - currentTime.getTime()) / 1000 / 60))
  const isNapTime = timeUntilNap <= 30

  return (
    <AppScreen>
      <AppScreen.Body>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-xs/6 text-gray-500">Napfy</div>
            <div className="text-sm text-gray-900">Sono Inteligente</div>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
              <path
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
                stroke="#FFD15C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="mt-6 text-center">
            <div className={clsx(
              'inline-flex items-center justify-center w-32 h-32 rounded-full',
              isNapTime ? 'bg-[var(--color-napfy-gold)]/20' : 'bg-[var(--color-napfy-teal)]/20'
            )}>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 tabular-nums">
                  {timeUntilNap}
                </div>
                <div className="text-xs text-gray-600">minutos</div>
              </div>
            </div>

            <div className="mt-4">
              <div className={clsx(
                'text-lg font-medium',
                isNapTime ? 'text-[var(--color-napfy-gold)]' : 'text-gray-900'
              )}>
                {isNapTime ? 'Hora da soneca!' : 'Próxima soneca'}
              </div>
              <div className="text-2xl font-bold text-gray-900 tabular-nums">
                {nextNapTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-gray-50 p-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Acordou às</span>
                <span className="font-medium text-gray-900">{wakeTime}</span>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Idade</span>
                <span className="font-medium text-gray-900">{babyAge} meses</span>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Janela de sono</span>
                <span className="font-medium text-gray-900">
                  {babyAge <= 3 ? '1h30' : babyAge <= 6 ? '2h' : '2h30'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className={clsx(
              'rounded-lg px-4 py-3 text-center text-sm font-medium text-white',
              isNapTime ? 'bg-[var(--color-napfy-gold)]' : 'bg-[var(--color-napfy-teal)]'
            )}>
              {isNapTime ?
                '🌙 Preparar ambiente para dormir' :
                '✨ Bebê acordado e feliz'
              }
            </div>
          </div>

          <div className="mt-4 rounded-lg bg-[var(--color-napfy-teal)]/5 p-3">
            <div className="flex items-start gap-2">
              <svg className="h-5 w-5 text-[var(--color-napfy-teal)] mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <div className="text-xs text-gray-600">
                Baseado nas diretrizes da Sociedade Brasileira de Pediatria para janelas de sono ideais
              </div>
            </div>
          </div>
        </div>
      </AppScreen.Body>
    </AppScreen>
  )
}