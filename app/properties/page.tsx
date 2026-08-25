import Link from 'next/link';
import { properties } from '@/app/lib/properties';

export default function PropertiesPage() {
  return (
    <main className="properties-page">
      <section className="properties-hero">
        <div className="container">
          <Link href="/" className="back-link">← Property4Naija</Link>
          <div className="eyebrow">Property discovery</div>
          <h1 className="serif">Find your next place.</h1>
          <p>Explore homes and property opportunities across Lagos. Verified inventory can be connected here as the platform goes live.</p>
        </div>
      </section>

      <section className="section properties-section">
        <div className="container">
          <div className="filter-bar">
            <div>
              <span className="filter-label">Listing type</span>
              <div className="filter-pills">
                <span className="filter-pill active">All</span>
                <span className="filter-pill">For Sale</span>
                <span className="filter-pill">For Rent</span>
                <span className="filter-pill">Shortlet</span>
              </div>
            </div>
            <div className="result-count">{properties.length} prototype listings</div>
          </div>

          <div className="listing-grid">
            {properties.map((property) => (
              <Link href={`/properties/${property.slug}`} className="listing-card" key={property.slug}>
                <div className="listing-image" style={{ backgroundImage: `url(${property.image})` }}>
                  <span className="tag">{property.type}</span>
                </div>
                <div className="listing-body">
                  <div className="card-location">{property.location}</div>
                  <h2>{property.title}</h2>
                  <div className="card-price">{property.price}</div>
                  <div className="listing-meta"><span>{property.beds} beds</span><span>{property.baths} baths</span><span>{property.area}</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
