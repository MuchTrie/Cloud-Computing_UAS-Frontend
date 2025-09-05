import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';

// Gunakan path public (CRA): file ada di public/assets/img/logo2.png (fallback ke logo.png jika belum ada)
const logoSrc = '/assets/img/logo2.png';

const navItems = [
  { label: 'Dashboard', path: '/user' },
  { label: 'Latihan', path: '/user/latihan' },
  { label: 'Tanya Coach', path: '/user/chat' },
  { label: 'Pengaturan', path: '/user/settings' },
  { label: 'Keluar', path: '/' }
];

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <aside className="cd-sidebar">
      <div className="cd-brand-logo">
        <img src={logoSrc} alt="Logo Chad.AI" loading="lazy" />
      </div>
      <nav className="cd-nav" aria-label="Navigasi utama dashboard">
        {navItems.map(item => {
          const active = pathname === item.path;
          return (
            <button
              key={item.label}
              className={`cd-nav-item ${active ? 'active' : ''}`}
              aria-label={item.label}
              onClick={() => navigate(item.path)}
            >
              <span className="cd-text">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;