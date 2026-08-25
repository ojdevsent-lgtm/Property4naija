'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { properties } from '@/app/lib/properties';

const types = ['All', 'For Sale', 'For Rent', 'Shortlet'] as const;

export default function PropertyFilters() {
  const [type, setType] = useState<(typeof types)[number]>('All');
  const [location, setLocation] = useState('All locations');
  const [query, setQuery] = useState('');

  const locations = useMemo(() => ['All locations', ...Array.from(new Set(properties.map((p) => p.location)))], []);
  const filtered = properties.filter((property) => {
    const matchesType = type === 'All' || property.type === type;
    const matchesLocation = location === 'All locations' || property.location === location;
    const needle = query.trim().toLowerCase();
    const matchesQuery = !needle || `${property.title} ${property.location} ${property.propertyType}`.toLowerCase().includes(needle);
    return matchesType && matchesLocation && matchesQuery;
  });

  return (
    <>
      <div className="filter-controls" aria-label="Property filters">
        <label className="filter-search">
          <span>Search</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Lagos properties" />
        </label>
        <label className="filter-select">
          <span>Location</span>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            {locations.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <div>
          <span className="filter-label">Listing type</span>
          <div className="filter-pills">
            {types.map((item) => (
              <button key={item} type="button" className={`filter-pill ${type === item ? 'active' : ''}`} onClick={() => setType(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="filter-results-head">
        <strong>{filtered.length} {filtered.length === 1 ? 'property' : 'properties'}</strong>
        <span>{filtered.length ? 'Showing matching opportunities' : 'Try a different search or filter'}</span>
      </div>

      {filtered.length ? (
        <div className="listing-grid">
          {filtered.map((property) => (
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
      ) : (
        <div className="empty-results">No matching prototype listings yet.</div>
      )}
    </>
  );
}
