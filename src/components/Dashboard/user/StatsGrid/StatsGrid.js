import React from 'react';
import './StatsGrid.css';

const stats = [
  { label: 'Disiplin', value: '87%', change: '+3%', desc: 'Konsistensi 7 hari' },
  { label: 'Sesi Latihan', value: 5, change: '+1', desc: 'Minggu ini' },
  { label: 'Jam Deep Work', value: 12, change: '+4', desc: '7 hari terakhir' },
  { label: 'Streak', value: 26, change: '+1', desc: 'Hari berturut-turut' }
];

const StatsGrid = () => (
  <section className="cd-stats" aria-label="Ringkasan performa utama">
    {stats.map(s => (
      <div key={s.label} className="cd-stat-card" role="figure" aria-label={s.label}>
        <div className="cd-stat-top">
          <span className="cd-stat-label">{s.label}</span>
          <span className={`cd-change ${s.change.startsWith('+') ? 'up' : 'down'}`}>{s.change}</span>
        </div>
        <div className="cd-value">{s.value}</div>
        <div className="cd-desc">{s.desc}</div>
      </div>
    ))}
  </section>
);

export default StatsGrid;