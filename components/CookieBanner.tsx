'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const STORAGE_KEY = 'cookie-consent'

function grantConsent() {
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void }
  w.gtag?.('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  })
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      setVisible(true)
    } else if (stored === 'granted') {
      grantConsent()
    }
  }, [])

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'granted')
    grantConsent()
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem(STORAGE_KEY, 'denied')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white border border-border rounded-xl shadow-lg px-5 py-4 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-fg-3 flex-1 leading-relaxed">
          Wir verwenden Cookies für Analyse und Optimierung unserer Website.
          Weitere Informationen in unserer{' '}
          <Link href="/datenschutz" className="text-primary">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex gap-2 shrink-0 w-full md:w-auto">
          <button
            onClick={handleDecline}
            className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-fg-3 border border-border rounded-lg hover:bg-surface transition-colors cursor-pointer"
          >
            Ablehnen
          </button>
          <button
            onClick={handleAccept}
            className="flex-1 md:flex-none px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  )
}
