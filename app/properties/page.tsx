import Link from 'next/link';
import { properties } from '@/app/lib/properties';
import PropertyFilters from './PropertyFilters';

export default function PropertiesPage() {
  return (
    <main className="properties-page">
      <header className="site-header">
        <div className="container nav">
          <Link className="brand" href="/">PROPERTY<span>4</span>NAIJA</Link>
          <nav className="nav-links"><Link href="/properties">Properties</Link><Link href="/#services">Services</Link><Link href="/#about">About</Link><Link href="/#contact">Contact</Link></nav>
          <a className="nav-cta" href="https://wa.me/2348095365434?text=Hello%20Property4Naija%2C%20I%27d%20like%20help%20finding%20a%20property." target="_blank" rel="noreferrer">Talk to an Agent</a>
        </div>
      </header>

      <section className="properties-hero"><div className="container"><Link href="/" className="back-link">← Property4Naija</Link><div className="eyebrow">Property discovery</div><h1 className="serif">Find your next place.</h1><p>Explore homes and property opportunities across Lagos. Verified inventory can be connected here as the platform goes live.</p></div></section>

      <section className="section properties-section"><div className="container"><PropertyFilters properties={properties} /></div></section>
    </main>
  );
}
