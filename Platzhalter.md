# Platzhalter & Offene To-Dos

Dieses Dokument trackt alle Platzhalter und noch nicht funktionalen Bereiche der Seite.
Bitte Einträge nach Erledigung als ~~durchgestrichen~~ markieren oder löschen.

---

## Offene Einträge

### [IFRAME] Hero-Sektion — Live-Demo Widget
**Datei:** `components/sections/HeroSection.tsx`
**Was zu tun ist:**
Den Platzhalter-Block durch das echte iFrame ersetzen:
```html
<iframe
  src="https://solar-widget-two.vercel.app/demo"
  width="100%"
  height="520"
  frameborder="0"
  style="border-radius: 12px;"
/>
```
Den umgebenden Platzhalter-`<div>` entfernen und das `<iframe>` direkt in den Browser-Chrome-Card einsetzen.

---

### [IFRAME] CTA-Sektion — Onboarding-Funnel
**Datei:** `components/sections/CTASection.tsx`
**Was zu tun ist:**
Den Platzhalter-Block durch das echte iFrame des Onboarding-Funnels ersetzen, sobald die URL bekannt ist:
```html
<iframe
  src="https://DEINE-DOMAIN/onboarding"
  width="100%"
  height="480"
  frameborder="0"
  style="border-radius: 16px;"
/>
```

---

### [LINK] CTA-Button — "Kostenlos starten"
**Dateien:** `components/Navbar.tsx`, `components/sections/HeroSection.tsx`
**Was zu tun ist:**
`href="#"` durch den finalen Link ersetzen — entweder ein externes Sign-up-Formular oder eine interne Route.

---

### [SEITE] Datenschutzerklärung
**Datei:** `app/datenschutz/page.tsx`
**Was zu tun ist:**
Den Platzhalter-Text durch die vollständige Datenschutzerklärung ersetzen.

---

### [SEITE] Impressum
**Datei:** `app/impressum/page.tsx`
**Was zu tun ist:**
Den Platzhalter-Text durch das vollständige Impressum (Angaben gem. § 5 TMG) ersetzen.

---

### [LINK] Footer — Kontakt
**Datei:** `components/Footer.tsx`
**Was zu tun ist:**
`href="#"` beim "Kontakt"-Link durch die finale Ziel-URL ersetzen (z. B. `/kontakt` oder `mailto:`).
