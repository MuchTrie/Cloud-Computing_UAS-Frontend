import React, { useState } from 'react';
import './WorkoutPage.css';

const initialExercises = [
  { name: 'Squat', sets: 5, reps: 5, weight: 100, done: false },
  { name: 'Deadlift', sets: 3, reps: 5, weight: 140, done: false },
  { name: 'Bench Press', sets: 5, reps: 5, weight: 80, done: false }
];

const WorkoutPage = () => {
  const [exercises, setExercises] = useState(initialExercises);
  const [started, setStarted] = useState(false);

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
            <li><span>Squat</span><strong>150 kg</strong></li>
            <li><span>Deadlift</span><strong>200 kg</strong></li>
            <li><span>Bench Press</span><strong>110 kg</strong></li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default WorkoutPage;
