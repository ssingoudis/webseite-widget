# Handoff: SingoTec Landing Page

## Overview
Conversion-focused landing page for **SingoTec** — a SaaS product that provides embeddable funnel widgets (via iFrame) for trades/craft businesses (Handwerksbetriebe). The page is in German, targets tradespeople directly (du-Form), and is designed to convert visitors into leads via an interactive onboarding funnel at the bottom.

## About the Design Files
The files in this bundle are **design references created in HTML/React** — prototypes showing intended look and behavior. The task is to **recreate these designs in the target codebase** (Next.js 14+ with TailwindCSS, as described in the project overview) using its established patterns and libraries.

## Fidelity
**High-fidelity (hifi)**: Pixel-perfect mockups with final colors, typography, spacing, and interactions. Recreate the UI closely using the codebase's existing libraries.

## Page Structure (Section Order)

### 1. Navigation (fixed top)
- Fixed top bar, white with blur backdrop
- Logo: "S" in indigo square (border-radius: 8px) + "SingoTec" text
- Desktop: centered nav links (Features, Branchen, So funktionierts, FAQ)
- Right: "Kostenlos starten" pill button (indigo)
- Mobile: nav links hidden at ≤768px
- Height: 64px, max-width: 1200px centered

### 2. Hero Section
- Two-column grid (text left, demo right), collapses to single column at ≤900px
- **Left column:**
  - Badge: "Für Handwerksbetriebe" with pulsing green dot, pill shape, indigo tint bg
  - H1: "Mehr Anfragen. Weniger Reibung. Direkt auf deiner Website." (last line in indigo)
  - Subtitle paragraph (18px, muted color)
  - CTA button: "Jetzt kostenlos starten" pill, indigo bg
  - Trust signals: 3x green checkmarks ("100% DSGVO-konform", "Keine Programmierkenntnisse", "In 5 Min. eingerichtet")
- **Right column:**
  - Interactive funnel demo in a browser-chrome card (3 colored dots header)
  - 3 question steps with icon grid (2x2), then contact form, then success state
  - Progress bar (amber/yellow) at bottom
  - Later: replace with live iFrame: `<iframe src="https://app.leadplug.de/demo">`

### 3. Features Section ("Warum SingoTec?")
- Overline: "VORTEILE"
- H2: "Warum SingoTec?"
- 6 cards in responsive grid (min 300px columns)
- Each card: icon in tinted circle (44x44), title, description
- Cards: white bg, 1px border, border-radius 16px, hover: indigo bloom shadow
- Features: Höhere Conversionrate, Dein Branding, Ein Snippet fertig, Sofort Leads erhalten, DSGVO-konform, Branchenspezifisch

### 4. Steps Section ("In 3 Schritten zu mehr Anfragen")
- Overline: "SO FUNKTIONIERT'S"
- 3-column grid, auto-cycling every 4 seconds
- Active step: scale(1.04), full opacity, indigo icon bg with glow shadow, indigo number badge
- Inactive steps: scale(1), opacity 0.45, white icon bg, light number badge
- Clickable to manually switch
- Steps: Funnel konfigurieren → Auf der Website einbinden → Anfragen empfangen

### 5. Comparison Section ("Welches Formular würdest du ausfüllen?")
- H2 only, no overline or subtitle
- Two cards side-by-side (flex, wrap on mobile)
- **Left (Kontaktformular):** grey, opacity 0.7, mockup of boring form fields + grey submit button, label at bottom
- **Right (Interaktiver Funnel):** indigo border (2px), light indigo bg, mockup of funnel step with icon grid + progress bar, label at bottom in indigo
- Later: user may replace with custom screenshots

### 6. Branchen Section ("Für jedes Handwerk das passende Formular")
- 5 cards in responsive grid (min 260px columns)
- Each: colored icon circle, title, description, status badge
- Live: Solaranlagen, Wärmepumpen, Heizungsmontage, Sanitär & Bad
- Custom: Eigene Branche
- Background: #fafbff

### 7. FAQ Section
- Max-width: 720px centered
- Accordion with expand/collapse, chevron rotates 180°
- 6 questions covering: Programmierkenntnisse, Kosten, DSGVO, Website-Kompatibilität, Anfragen-Empfang, Branding
- Background: #fafbff

### 8. CTA Section (Onboarding Funnel)
- Dark container (#0f1029), border-radius 24px, max-width 900px
- Subtle indigo radial glows in corners
- Single white headline: "Jetzt kostenlos deinen ersten Funnel einrichten"
- Embedded onboarding funnel (white card, max-width 560px, border-radius 20px):
  - Step 1: "Welche Branche bist du?" (6 options: Solar, Wärmepumpe, Heizung, Sanitär, Dach, Andere)
  - Step 2: "Wie viele Anfragen brauchst du pro Monat?" (4 options)
  - Step 3: "Hast du bereits eine Website?" (4 options)
  - Step 4: Email input + "Kostenlos starten" button
  - Success: Thank you message
- Later: replace with live iFrame

### 9. Footer
- Light bg (#fafbff), top border
- Logo left, links center (Datenschutz, Impressum, Kontakt), copyright right

## Design Tokens

### Colors
- Primary: `#4648d4`
- Primary hover: `#3538b8`
- Primary light/tint: `#f0f0ff`
- Background: `#fdfdfd` (body), `#fafbff` (sections)
- Surface: `#ffffff`
- Border: `#e7e7ee` (var --color-border)
- Text primary: `#000000`
- Text secondary: `#3a3a4a`
- Text muted: `#6b6b80`
- Text subtle: `#a0a0b8`
- Success green: `#22c55e`
- Amber (progress): `#f59e0b`
- Error red: `#dc2626`
- Dark CTA bg: `#0f1029`

### Typography
- Headlines: `Lora` (Google Fonts, serif), weight 600
- UI/Body: `Plus Jakarta Sans` (Google Fonts, sans-serif)
- Code: `IBM Plex Mono`
- H1: clamp(36px, 5vw, 56px), weight 600, line-height 1.1, letter-spacing -0.03em
- H2: clamp(28px, 4vw, 42px), weight 600, line-height 1.15, letter-spacing -0.02em
- Body: 16px, line-height 1.55
- Body large: 18px, line-height 1.6
- Small/labels: 13-14px
- Overline: 12px, weight 700, uppercase, letter-spacing 0.08em

### Spacing
- Max-width: 1200px (page), 900px (CTA), 720px (FAQ)
- Section padding: 96px vertical, 24px horizontal
- Card padding: 24-28px
- Grid gaps: 16-32px

### Shapes
- Cards: border-radius 16-20px
- Buttons: border-radius 999px (pill)
- Icon circles: border-radius 10-12px
- Inputs: border-radius 10px

### Shadows
- Card hover: `0 4px 24px rgba(70,72,212,0.1)`
- Demo card: `0 4px 24px rgba(70,72,212,0.12), 0 1px 3px rgba(0,0,0,0.06)`
- Active step: `0 4px 24px rgba(70,72,212,0.25)`

### Animations
- Easing: cubic-bezier(0.4, 0, 0.2, 1)
- Hover transitions: 150ms
- Step cycling: 400ms transitions, 4000ms interval
- Progress bar: width 300ms

## Icons
Material Symbols Outlined (Google Fonts CDN). Key icons used:
- Nav/brand: filter_alt
- Features: bolt, palette, code, mail, shield, tune
- Steps: tune, code, mark_email_read
- Branchen: wb_sunny, heat_pump, hvac, bathtub, settings
- UI: arrow_forward, chevron_left, check_circle, close, expand_more

## Language
All copy is in German (du-Form, informal). Target audience: Handwerksbetriebe (trades businesses).

## Files
- `SingoTec Landing Page.html` — Complete prototype (single file, React + Babel inline)
- `colors_and_type.css` — Design system tokens (from Violet Bloom, adapted)
