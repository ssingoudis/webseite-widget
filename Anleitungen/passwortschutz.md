# Passwortschutz

## Funktionsweise

`middleware.ts` im Root läuft auf jeder Request (Edge Runtime). Wenn `SITE_PASSWORD` gesetzt ist, prüft sie das Cookie `site-auth`. Kein gültiges Cookie → Redirect auf `/locked`.

`/locked` ist ein Server Component mit einer Server Action, die bei korrektem Passwort das Cookie setzt und auf `/` redirectet.

**Cookie:** `site-auth`, `httpOnly`, `sameSite: lax`, Laufzeit 7 Tage

---

## Passwort aktivieren

`.env.local`:
```
SITE_PASSWORD=deinPasswort
```

Vercel Dashboard → Project → Settings → Environment Variables:
```
SITE_PASSWORD = deinPasswort
```

Ohne den Vercel-Eintrag greift der Schutz nur lokal.

---

## Passwort deaktivieren

**Lokal:** Eintrag aus `.env.local` entfernen, Dev-Server neu starten.

**Vercel:** Environment Variable `SITE_PASSWORD` im Dashboard löschen → neu deployen.

Wenn `SITE_PASSWORD` nicht gesetzt ist, gibt `middleware.ts` jede Request direkt durch — `app/locked/page.tsx` bleibt unerreichbar (kein Redirect mehr).

---

## Passwort ändern

1. `SITE_PASSWORD` in `.env.local` und Vercel auf neuen Wert setzen
2. Bestehende `site-auth` Cookies der Nutzer werden ungültig (falscher Wert) → automatisch auf `/locked` weitergeleitet

---

## Passwort zurücksetzen (eigenes Cookie löschen)

Im Browser DevTools → Application → Cookies → `site-auth` löschen.  
Oder Inkognito-Fenster verwenden.

---

## Relevante Dateien

| Datei | Funktion |
|---|---|
| `middleware.ts` | Request abfangen, Cookie prüfen, Redirect |
| `app/locked/page.tsx` | Passwortformular + Server Action |
| `.env.local` | `SITE_PASSWORD` lokal |
| Vercel Dashboard | `SITE_PASSWORD` in Produktion |
