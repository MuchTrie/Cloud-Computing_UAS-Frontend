import React from 'react';
import './MissionToday.css';

const MissionToday = () => (
  <section className="cd-mission" aria-labelledby="mission-title">
    <div className="cd-mission-header">
      <h2 id="mission-title">Misi Hari Ini</h2>
      <span className="cd-date">{new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
    </div>
    <ul className="cd-mission-list">
      <li>
        <h3>Latihan Kekuatan 45 Menit</h3>
        <p>Fokus: Compound lifts (squat, deadlift, bench).</p>
      </li>
      <li>
        <h3>Belajar / Deep Work 2 Jam</h3>
        <p>Kerjakan modul lanjutan strategi AI dan catat insight.</p>
      </li>
      <li>
        <h3>Refleksi Malam 10 Menit</h3>
        <p>Tinjau disiplin & tulis 1 pelajaran terbesar hari ini.</p>
      </li>
    </ul>
  </section>
);

export default MissionToday;