import React, { useState } from 'react';
import './WorkoutPage.css';

const initialExercises = [
  { name: 'Clean Rows', sets: 4, reps: 8, weight: 60, done: false },
  { name: 'Single-Arm Dumbbell Row', sets: 3, reps: 10, weight: 28, done: false },
  { name: 'Biceps Curl', sets: 3, reps: 12, weight: 18, done: false },
  { name: 'Dumbbell Lunge', sets: 3, reps: 10, weight: 20, done: false },
  { name: 'Abs Circuit (bodyweight)', sets: 3, reps: 20, weight: 0, done: false }
];

const WorkoutPage = () => {
  const [exercises, setExercises] = useState(initialExercises);
  const [started, setStarted] = useState(false);
  const [openVideo, setOpenVideo] = useState(null);

  const videos = [
  { file: 'Clean_Rows.mp4', title: 'Teknik Clean Rows', thumb: '/assets/img/thumbnail/Clean_Rows.png', desc: 'Demonstrasi teknik clean rows yang benar—fokus pada punggung netral, tarik siku ke belakang, dan stabilitas inti.' },
  { file: 'Common_Shoulder_Mistakes_Explained.mp4', title: 'Kesalahan Umum Bahu', thumb: '/assets/img/thumbnail/Common_Shoulder_Mistakes_Explained.png', desc: 'Ulasan kesalahan umum saat melatih bahu dan koreksi posisi untuk mengurangi risiko cedera.' },
  { file: 'Curl_Mistakes.mp4', title: 'Kesalahan Saat Curl', thumb: '/assets/img/thumbnail/Curl_Mistakes.png', desc: 'Contoh kesalahan saat melakukan curl dan tips memperbaiki teknik agar otot target bekerja efektif.' },
  { file: 'Dumbbell_Lunge_Mistakes_Before_Leg_Day.mp4', title: 'Tips Lunge Dumbbell', thumb: '/assets/img/thumbnail/Dumbbell_Lunge_Mistakes_Before_Leg_Day.png', desc: 'Tips lunge dengan dumbbell untuk menjaga keseimbangan, depth yang tepat, dan aktivasi otot paha.' }
  ,{ file: 'Abs_Workout_You_Can_Do_Anywhere_With_Just_Bodyweight_&_Dumbbells.mp4', title: 'Latihan Abs (Bodyweight & Dumbbells)', thumb: '/assets/img/thumbnail/Abs_Workout_You_Can_Do_Anywhere_With_Just_Bodyweight_&_Dumbbells.png', desc: 'Rangkaian latihan perut yang bisa dilakukan di rumah, dengan opsi bodyweight atau tambahan dumbbell untuk progresi.' }
  ,{ file: 'SingleArm_Dumbbell_Row_Mistakes_You_Should_Avoid.mp4', title: 'Kesalahan Single-Arm Dumbbell Row', thumb: '/assets/img/thumbnail/SingleArm_Dumbbell_Row_Mistakes_You_Should_Avoid.png', desc: 'Identifikasi kesalahan umum pada single-arm row dan langkah korektif untuk memastikan aktivasi punggung yang tepat.' }
  ,{ file: 'Biceps_Training.mp4', title: 'Latihan Biceps', thumb: '/assets/img/thumbnail/Biceps_Training.png', desc: 'Latihan biceps dengan variasi beban dan teknik untuk meningkatkan kekuatan dan ukuran otot.' }
  ,{ file: 'Fix_These_Dumbbell_Lunge_Mistakes_Before_Leg_Day.mp4', title: 'Perbaiki Kesalahan Lunge (Dumbbell)', thumb: '/assets/img/thumbnail/Fix_These_Dumbbell_Lunge_Mistakes_Before_Leg_Day.png', desc: 'Perbaikan kesalahan umum pada lunge dengan dumbbell agar aman dan efektif sebelum hari latihan kaki.' }
  ,{ file: 'How_to_Train_Your_Back_the_Right_Way.mp4', title: 'Cara Latih Punggung yang Benar', thumb: '/assets/img/thumbnail/How_to_Train_Your_Back_the_Right_Way.png', desc: 'Panduan teknik dan variasi latihan punggung untuk membangun otot punggung secara aman dan terkontrol.' }
  ];

  const toggleDone = (index) => {
    setExercises(prev => prev.map((ex,i) => i===index ? { ...ex, done: !ex.done } : ex));
  };

  const startWorkout = () => setStarted(true);

  return (
    <div className="workout-layout">
      <div className="workout-main">
        <header className="workout-header">
          <h1>Latihan Hari Ini</h1>
          <button className="start-btn" disabled={started} onClick={startWorkout}>
            {started ? 'Sedang Berjalan' : 'Mulai Latihan'}
          </button>
        </header>
        <table className="exercise-table" aria-label="Daftar latihan">
          <thead>
            <tr>
              <th>Latihan</th>
              <th>Set</th>
              <th>Reps</th>
              <th>Beban (kg)</th>
              <th>Selesai</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((ex,i) => (
              <tr key={ex.name} className={ex.done ? 'done' : ''}>
                <td>{ex.name}</td>
                <td>{ex.sets}</td>
                <td>{ex.reps}</td>
                <td>{ex.weight}</td>
                <td>
                  <input type="checkbox" checked={ex.done} onChange={() => toggleDone(i)} aria-label={`Tandai ${ex.name} selesai`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Video Section */}
        <section className="video-section" aria-label="Video Edukasi Latihan">
          <div className="video-header">
            <h2>Video Edukasi</h2>
            <p>Teknik & koreksi umum untuk meningkatkan performa.</p>
          </div>
          <div className="video-grid">
            {videos.map(v => {
              // Support either a full path (starts with '/') or a filename stored in /assets/vid
              const thumbPath = v.thumb ? (v.thumb.startsWith('/') ? v.thumb : `/assets/vid/${v.thumb}`) : null; // siapkan file gambar
              return (
                <button key={v.file} className="video-card" onClick={() => setOpenVideo(v)} aria-label={`Putar video ${v.title}`}>
                  <div className="thumb-overlay has-thumb">
                    <img src={thumbPath} alt={v.title} loading="lazy" onError={(e)=>{e.currentTarget.style.display='none';}} />
                    <span className="play-icon">▶</span>
                  </div>
                  <div className="video-meta">
                    <strong>{v.title}</strong>
                    <p className="desc">{v.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      </div>
      <aside className="workout-side" aria-label="Kalender dan rekor pribadi">
        <div className="week-calendar">
          <h2>Minggu Ini</h2>
          <div className="week-grid">
            {['Sen','Sel','Rab','Kam','Jum','Sab','Min'].map((d,idx) => (
              <div key={d} className={`day ${idx < 5 ? 'active' : ''}`}>{d}</div>
            ))}
          </div>
        </div>
        <div className="pr-card">
          <h2>Rekor Pribadi</h2>
          <ul>
            <li><span>-</span><strong>-</strong></li>
            <li><span>-</span><strong>-</strong></li>
            <li><span>-</span><strong>-</strong></li>
          </ul>
        </div>
      </aside>
      {openVideo && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-label={openVideo.title} onClick={() => setOpenVideo(null)}>
          <div className="video-dialog" onClick={e => e.stopPropagation()}>
            <div className="video-dialog-header">
              <h3>{openVideo.title}</h3>
              <button className="close-btn" onClick={() => setOpenVideo(null)} aria-label="Tutup">✕</button>
            </div>
            <video src={`/assets/vid/${openVideo.file}`} controls autoPlay playsInline />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutPage;
