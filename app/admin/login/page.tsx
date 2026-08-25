'use client'

import { FormEvent, useState } from 'react'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('Firebase authentication is not configured yet. Add the Firebase environment variables to enable admin sign-in.')
  }

  return (
    <main className="min-h-screen bg-[#f7f4ec] px-5 py-10 text-[#17352d]">
      <div className="mx-auto flex min-h-[80vh] max-w-md items-center">
        <section className="w-full rounded-3xl bg-white p-7 shadow-sm ring-1 ring-black/5 sm:p-9">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a37a38]">Property4Naija</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight">Admin sign in</h1>
          <p className="mt-2 text-sm leading-6 text-[#5f6d67]">Manage property listings and enquiries from one secure dashboard.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block text-sm font-medium">
              Email
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" autoComplete="email" required className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#17352d]" />
            </label>
            <label className="block text-sm font-medium">
              Password
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" autoComplete="current-password" required className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:border-[#17352d]" />
            </label>
            <button type="submit" className="w-full rounded-xl bg-[#17352d] px-4 py-3 font-semibold text-white transition hover:opacity-90">Sign in</button>
          </form>

          {message && <p role="status" className="mt-5 rounded-xl bg-[#f4ead8] px-4 py-3 text-sm leading-5 text-[#6b5226]">{message}</p>}
        </section>
      </div>
    </main>
  )
}
