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
  src="https://app.leadplug.de/demo"
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

### [LINK] CTA-Button — "Kostenlos einrichten lassen"
**Dateien:** `components/Navbar.tsx`, `components/sections/HeroSection.tsx`
**Was zu tun ist:**
Die Cal.eu-URL `https://cal.eu/singoscale/erstgespraech` durch den finalen SingoTec-Kalenderlink ersetzen.
Außerdem den Link in `HeroSection.tsx` (falls vorhanden) ebenfalls aktualisieren.

---

### [ENV] Resend — API-Key & Absenderadresse
**Datei:** `app/api/contact/route.ts`, `.env.local`
**Was zu tun ist:**
1. `.env.local` erstellen (falls nicht vorhanden) und eintragen:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   ```
2. In `app/api/contact/route.ts` die `from`-Adresse von `onboarding@resend.dev` auf eine
   verifizierte eigene Domain ändern, z.B. `kontakt@singotec.de`.
3. Die Empfängeradresse `stavrossingoudis@gmail.com` durch die finale Geschäfts-E-Mail ersetzen.

---

### [LEGAL] Datenschutzerklärung — Persönliche Angaben
**Datei:** `app/datenschutz/page.tsx`
**Was zu tun ist:**
Die Platzhalter in Abschnitt 1 (Verantwortlicher) durch echte Daten ersetzen:
- `[DEIN NAME]`
- `[STRASSE, HAUSNUMMER]`
- `[PLZ ORT]`
- `[DEINE@EMAIL.DE]`
Anschließend von einem Anwalt oder über https://datenschutz-generator.de prüfen lassen.

---

### [SEITE] Impressum
**Datei:** `app/impressum/page.tsx`
**Was zu tun ist:**
Den Platzhalter-Text durch das vollständige Impressum (Angaben gem. § 5 TMG) ersetzen.
