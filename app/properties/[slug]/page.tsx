import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProperty, properties } from '@/app/lib/properties';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: 'Property not found | Property4Naija' };
  return {
    title: `${property.title} — ${property.location} | Property4Naija`,
    description: `${property.type} ${property.propertyType.toLowerCase()} in ${property.location}. View property details and contact Property4Naija for enquiries.`,
  };
}

export default async function PropertyPage({ params }: Props) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();

  const whatsappText = encodeURIComponent(`Hello Property4Naija, I am interested in ${property.title} in ${property.location}. I would like to request more information.`);
  const related = properties.filter((item) => item.slug !== property.slug).slice(0, 2);

  return (
    <main className="property-detail">
      <div className="container detail-topbar">
        <Link href="/properties" className="back-link">← All properties</Link>
      </div>

      <section className="detail-layout container">
        <div className="detail-image" style={{ backgroundImage: `url(${property.image})` }}>
          <span className="tag">{property.type}</span>
        </div>
        <div className="detail-content">
          <div className="eyebrow">{property.propertyType}</div>
          <h1 className="serif">{property.title}</h1>
          <p className="detail-location">{property.location}</p>
          <div className="detail-price">{property.price}</div>
          <div className="detail-specs">
            <div><strong>{property.beds}</strong><span>Bedrooms</span></div>
            <div><strong>{property.baths}</strong><span>Bathrooms</span></div>
            <div><strong>{property.area}</strong><span>Area</span></div>
          </div>
          <p className="detail-description">{property.description}</p>
          <div className="detail-actions">
            <a href={`https://wa.me/2348095365434?text=${whatsappText}`} className="primary-action" target="_blank" rel="noreferrer">WhatsApp an agent</a>
            <a href="tel:+2348095365434" className="secondary-action">Call +234 809 536 5434</a>
          </div>
        </div>
      </section>

      <section className="section detail-features">
        <div className="container detail-feature-grid">
          <div><div className="eyebrow">Property highlights</div><h2 className="serif">Designed around the details that matter.</h2></div>
          <div className="feature-list">{property.features.map((feature) => <div key={feature}>✓ <span>{feature}</span></div>)}</div>
        </div>
      </section>

      <section className="section related-properties">
        <div className="container">
          <div className="eyebrow">Keep exploring</div>
          <h2 className="serif">More properties</h2>
          <div className="cards related-grid">
            {related.map((item) => (
              <Link className="card" href={`/properties/${item.slug}`} key={item.slug}>
                <div className="card-image" style={{ backgroundImage: `url(${item.image})` }}><span className="tag">{item.type}</span></div>
                <div className="card-body"><div className="card-location">{item.location}</div><h3>{item.title}</h3><div className="card-price">{item.price}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
