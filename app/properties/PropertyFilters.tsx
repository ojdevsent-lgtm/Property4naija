'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Property } from '@/app/lib/properties';

type Props = { properties: Property[] };

export default function PropertyFilters({ properties }: Props) {
  const [type, setType] = useState<'All' | Property['type']>('All');
  const [location, setLocation] = useState('All locations');
  const [query, setQuery] = useState('');

  const locations = ['All locations', ...Array.from(new Set(properties.map((p) => p.location.split(',')[0])))];
  const filtered = useMemo(() => properties.filter((p) => {
    const matchesType = type === 'All' || p.type === type;
    const matchesLocation = location === 'All locations' || p.location.startsWith(location);
    const haystack = `${p.title} ${p.location} ${p.propertyType}`.toLowerCase();
    return matchesType && matchesLocation && haystack.includes(query.toLowerCase());
  }), [properties, type, location, query]);

  return (
    <>
      <div className="filter-controls">
        <div className="filter-pills" role="group" aria-label="Listing type">
          {(['All', 'For Sale', 'For Rent', 'Shortlet'] as const).map((item) => (
            <button key={item} type="button" className={`filter-pill ${type === item ? 'active' : ''}`} onClick={() => setType(item)}>{item}</button>
          ))}
        </div>
        <label className="filter-select"><span>Location</span><select value={location} onChange={(e) => setLocation(e.target.value)}>{locations.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="filter-search"><span>Search</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Lekki, apartment..." /></label>
      </div>

      <div className="filter-summary"><span>{filtered.length} {filtered.length === 1 ? 'property' : 'properties'}</span><span>Prototype inventory</span></div>

      {filtered.length ? <div className="listing-grid">
        {filtered.map((property) => (
          <Link href={`/properties/${property.slug}`} className="listing-card" key={property.slug}>
            <div className="listing-image" style={{ backgroundImage: `url(${property.image})` }}><span className="tag">{property.type}</span></div>
            <div className="listing-body"><div className="card-location">{property.location}</div><h2>{property.title}</h2><div className="card-price">{property.price}</div><div className="listing-meta"><span>{property.beds} beds</span><span>{property.baths} baths</span><span>{property.area}</span></div></div>
          </Link>
        ))}
      </div> : <div className="empty-state"><h2>No matching properties</h2><p>Try a different location, listing type or search term.</p></div>}
    </>
  );
}
