import React from 'react';
import './Sidebar.css';

const navItems = [
  { label: 'Dashboard', icon: '🏠' },
  { label: 'Coach Chad', icon: '💬' },
  { label: 'The Forge', icon: '⚒️' },
  { label: 'Discipline Ledger', icon: '📘' },
  { label: 'Legacy Analytics', icon: '📊' },
  { label: 'Settings', icon: '⚙️' }
];

const Sidebar = () => (
  <aside className="cd-sidebar">
    <div className="cd-brand">Chad<span>.AI</span></div>
    <nav className="cd-nav">
      {navItems.map(item => (
        <button key={item.label} className="cd-nav-item" aria-label={item.label}>
          <span className="cd-icon" aria-hidden="true">{item.icon}</span>
          <span className="cd-text">{item.label}</span>
        </button>
      ))}
    </nav>
  </aside>
);

export default Sidebar;