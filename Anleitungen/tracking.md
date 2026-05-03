# Tracking-Setup

## Stack

| Tool | ID | Zweck |
|---|---|---|
| Google Tag Manager | `GTM-5VQ7DP2K` | Container für alle Tags |
| Google Analytics 4 | `G-6FRSC35786` | Traffic, Herkunft, Verhalten, Conversions |
| Microsoft Clarity | `wlcpeuuldk` | Heatmaps, Session-Recordings |

---

## Architektur

```
layout.tsx
├── consent-init (beforeInteractive) → Consent Mode v2, alle Kategorien default: denied
├── GTM (afterInteractive)           → lädt GTM-5VQ7DP2K
│   ├── Tag: Google Tag - GA4        → Trigger: Initialization - All Pages
│   └── Tag: Clarity - Heatmaps     → Trigger: All Pages
└── CookieBanner.tsx                 → Client Component, steuert Consent-Update
```

GTM selbst lädt immer. Ob GA4 und Clarity Daten senden, hängt ausschließlich vom Consent-Status ab.

---

## Consent Mode v2

Initialisiert in `app/layout.tsx` via `<Script strategy="beforeInteractive">`:

```js
gtag('consent', 'default', {
  analytics_storage: 'denied',
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  wait_for_update: 500
})
```

Bei Nutzer-Zustimmung feuert `CookieBanner.tsx`:

```js
gtag('consent', 'update', {
  analytics_storage: 'granted',
  ad_storage: 'granted',
  ad_user_data: 'granted',
  ad_personalization: 'granted',
})
```

---

## CookieBanner

**Datei:** `components/CookieBanner.tsx`

**localStorage-Key:** `cookie-consent`  
**Werte:** `granted` | `denied`

Logik beim Mount:
- Kein Eintrag → Banner anzeigen
- `granted` → `grantConsent()` sofort aufrufen (wiederkehrende Besucher)
- `denied` → nichts tun, alles bleibt blockiert

---

## Neues Tag in GTM hinzufügen

1. [tagmanager.google.com](https://tagmanager.google.com) → Container `GTM-5VQ7DP2K`
2. Tags → Neu → Tag-Typ wählen
3. Trigger: All Pages (oder spezifischer Trigger)
4. Speichern → Senden → Veröffentlichen

Kein Code-Änderung nötig — GTM ist bereits im Layout eingebunden.

---

## Consent für neues Tag konfigurieren

Wenn ein Tag nur bei Zustimmung feuern soll (z.B. Meta Pixel):
- Im Tag → "Erweiterte Einstellungen" → "Einwilligungseinstellungen"
- `ad_storage` als Voraussetzung setzen

---

## Daten auswerten

- **GA4:** [analytics.google.com](https://analytics.google.com) → Property LeadPlug
- **Clarity:** [clarity.microsoft.com](https://clarity.microsoft.com) → Projekt LeadPlug
- Clarity kann direkt mit GA4 verknüpft werden (Einstellungen → Integration von Google Analytics)
