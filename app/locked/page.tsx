import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

async function unlock(formData: FormData) {
  'use server'
  const input = formData.get('password') as string
  if (input === process.env.SITE_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set('site-auth', input, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    redirect('/')
  }
}

export default function LockedPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-surface">
      <form
        action={unlock}
        className="flex flex-col gap-4 p-8 bg-white rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="font-display text-2xl text-fg-2">Zugang</h1>
        <input
          type="password"
          name="password"
          placeholder="Passwort"
          required
          className="border border-border rounded-lg px-4 py-2 text-fg-2 focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="bg-primary text-white rounded-lg px-4 py-2 font-ui font-medium"
        >
          Einloggen
        </button>
      </form>
    </main>
  )
}
