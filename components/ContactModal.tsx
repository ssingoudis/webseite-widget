"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [dsgvo, setDsgvo] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    firstInputRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    window.history.pushState({ modal: true }, "");
    const onPop = () => onClose();
    window.addEventListener("popstate", onPop);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("popstate", onPop);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!dsgvo) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, website: "" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Unbekannter Fehler");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Netzwerkfehler. Bitte versuche es erneut.");
      setStatus("error");
    }
  }

  function handleReset() {
    setName("");
    setEmail("");
    setMessage("");
    setDsgvo(false);
    setStatus("idle");
    setErrorMsg("");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-fg-3 hover:text-black transition-colors"
          aria-label="Schließen"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="font-bold tracking-tight text-[20px] text-black mb-2">
              Nachricht gesendet
            </h2>
            <p className="text-fg-3 text-sm mb-6">
              Wir melden uns schnellstmöglich bei dir.
            </p>
            <button
              onClick={handleReset}
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150"
            >
              Schließen
            </button>
          </div>
        ) : (
          <>
            <h2
              id="modal-title"
              className="font-bold tracking-tight text-[22px] text-black mb-1"
            >
              Kontakt aufnehmen
            </h2>
            <p className="text-fg-3 text-sm mb-6">
              Schreib uns kurz — wir melden uns innerhalb von 24 Stunden.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Honeypot — hidden from humans */}
              <input
                type="text"
                name="website"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-black" htmlFor="contact-name">
                  Name
                </label>
                <input
                  id="contact-name"
                  ref={firstInputRef}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="border border-border rounded-lg px-3 py-2.5 text-sm text-black placeholder:text-fg-4 outline-none focus:border-primary transition-colors"
                  placeholder="Dein Name"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-black" htmlFor="contact-email">
                  E-Mail
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border border-border rounded-lg px-3 py-2.5 text-sm text-black placeholder:text-fg-4 outline-none focus:border-primary transition-colors"
                  placeholder="deine@email.de"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-black" htmlFor="contact-message">
                  Nachricht
                </label>
                <textarea
                  id="contact-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="border border-border rounded-lg px-3 py-2.5 text-sm text-black placeholder:text-fg-4 outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Wie können wir dir helfen?"
                />
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={dsgvo}
                  onChange={(e) => setDsgvo(e.target.checked)}
                  required
                  className="mt-0.5 accent-primary"
                />
                <span className="text-xs text-fg-3 leading-relaxed">
                  Ich habe die{" "}
                  <Link
                    href="/datenschutz"
                    className="text-primary underline hover:no-underline"
                    target="_blank"
                  >
                    Datenschutzerklärung
                  </Link>{" "}
                  gelesen und stimme der Verarbeitung meiner Daten zu.
                </span>
              </label>

              {status === "error" && (
                <p className="text-red-600 text-xs">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading" || !dsgvo}
                className="bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors duration-150 mt-1"
              >
                {status === "loading" ? "Wird gesendet…" : "Nachricht senden"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
