'use client'

import { FormEvent, useState } from 'react'

export default function NewPropertyPage() {
  const [saved, setSaved] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSaved(true)
  }

  return (
    <main className="min-h-screen bg-[#f7f4ec] px-5 py-8 text-[#17352d]">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a37a38]">Property management</p>
        <h1 className="mt-2 text-3xl font-semibold">Add a property</h1>
        <p className="mt-2 text-sm text-[#68756f]">Prepare a listing for Firestore. Publishing will be enabled after Firebase is connected.</p>

        <form onSubmit={handleSubmit} className="mt-7 space-y-5 rounded-2xl bg-white p-6 ring-1 ring-black/5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Property title" name="title" />
            <Field label="Location" name="location" />
            <Field label="Price" name="price" type="number" />
            <label className="text-sm font-medium">Listing type<select name="listingType" className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3"><option>For Sale</option><option>For Rent</option><option>Shortlet</option></select></label>
            <label className="text-sm font-medium">Property type<select name="propertyType" className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3"><option>Apartment</option><option>House</option><option>Land</option><option>Commercial</option></select></label>
            <Field label="Bedrooms" name="bedrooms" type="number" />
            <Field label="Bathrooms" name="bathrooms" type="number" />
            <Field label="Area (sqm)" name="area" type="number" />
          </div>
          <label className="block text-sm font-medium">Description<textarea name="description" rows={6} className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" /></label>
          <label className="block text-sm font-medium">Features<textarea name="features" rows={4} placeholder="Swimming pool, parking, fitted kitchen..." className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" /></label>
          <button type="submit" className="rounded-xl bg-[#17352d] px-5 py-3 text-sm font-semibold text-white">Save draft</button>
          {saved && <p role="status" className="rounded-xl bg-[#f4ead8] px-4 py-3 text-sm text-[#6b5226]">Draft form captured. Firebase persistence will be connected next.</p>}
        </form>
      </div>
    </main>
  )
}

function Field({ label, name, type = 'text' }: { label: string; name: string; type?: string }) {
  return <label className="block text-sm font-medium">{label}<input name={name} type={type} className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" /></label>
}
