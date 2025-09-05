import React from 'react';
import './MissionToday.css';

const MissionToday = () => (
  <section className="cd-mission welcome" aria-labelledby="mission-title">
    <div className="cd-welcome-card no-actions">
      <div className="avatar-col">
        <div className="avatar-frame flat">
          <img
            className="chad-avatar large"
            src="/assets/img/chad_pp2.png"
            alt="Coach Chad"
          />
        </div>
      </div>
      <div className="welcome-content">
        <div className="welcome-text-group">
          <h2 id="mission-title">Selamat datang — Saya Coach Chad</h2>
          <p className="lead">
            Selamat datang di Chad.AI. Hari ini fokus kita pada disiplin, teknik, dan progres bertahap. Saya bantu koreksi gerakan, susun misi harian, serta memberi saran nutrisi & motivasi. Jalani hari ini dengan fokus dan konsisten — saya di sini menemani progresmu.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default MissionToday;