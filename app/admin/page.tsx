import Link from 'next/link'

const stats = [
  ['Published properties', '0'],
  ['Draft properties', '0'],
  ['New enquiries', '0'],
]

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ec] px-5 py-8 text-[#17352d]">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a37a38]">Property4Naija</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Admin dashboard</h1>
            <p className="mt-1 text-sm text-[#5f6d67]">Manage listings and monitor incoming property enquiries.</p>
          </div>
          <Link href="/admin/properties/new" className="rounded-xl bg-[#17352d] px-5 py-3 text-center text-sm font-semibold text-white">Add property</Link>
        </header>

        <section className="grid gap-4 py-7 sm:grid-cols-3">
          {stats.map(([label, value]) => (
            <article key={label} className="rounded-2xl bg-white p-5 ring-1 ring-black/5">
              <p className="text-sm text-[#68756f]">{label}</p>
              <p className="mt-2 text-3xl font-semibold">{value}</p>
            </article>
          ))}
        </section>

        <section className="rounded-2xl bg-white p-6 ring-1 ring-black/5">
          <h2 className="text-lg font-semibold">Property management</h2>
          <p className="mt-2 text-sm leading-6 text-[#68756f]">Your Firebase project is not connected yet, so live listings will appear here once authentication and Firestore configuration are supplied.</p>
          <Link href="/admin/properties/new" className="mt-5 inline-flex rounded-xl border border-[#17352d]/15 px-4 py-2.5 text-sm font-semibold">Create first listing</Link>
        </section>
      </div>
    </main>
  )
}
