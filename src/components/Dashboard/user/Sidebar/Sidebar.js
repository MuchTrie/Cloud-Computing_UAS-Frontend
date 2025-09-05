import React from 'react';
import './Sidebar.css';

// Gunakan path public (CRA): file ada di public/assets/img/logo2.png (fallback ke logo.png jika belum ada)
const logoSrc = '/assets/img/logo2.png';

const navItems = [
  'Dashboard',
  'Latihan',
  'Tanya Coach Chad',
  'Pengaturan',
  'Keluar'
];

const Sidebar = () => (
  <aside className="cd-sidebar">
    <div className="cd-brand-logo">
      <img src={logoSrc} alt="Logo Chad.AI" loading="lazy" />
    </div>
    <nav className="cd-nav" aria-label="Navigasi utama dashboard">
      {navItems.map(label => (
        <button key={label} className="cd-nav-item" aria-label={label}>
          <span className="cd-text">{label}</span>
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar;