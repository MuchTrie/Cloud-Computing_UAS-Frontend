import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './theme.css';
import Sidebar from './Sidebar/Sidebar';
import MissionToday from './MissionToday/MissionToday';
import StatsGrid from './StatsGrid/StatsGrid';
import FloatingChatButton from './FloatingChatButton/FloatingChatButton';
import WorkoutPage from './Workout/WorkoutPage';
import ChatAI from './ChatAI/chat';

const UserDashboard = () => {
  return (
    <div className="cd-layout">
      <Sidebar />
      <main className="cd-main" aria-label="User dashboard main content">
        <Routes>
          <Route index element={<>
            <MissionToday />
            <StatsGrid />
          </>} />
          <Route path="latihan" element={<WorkoutPage />} />
          <Route path="chat" element={<ChatAI />} />
          <Route path="*" element={<Navigate to="/user" replace />} />
        </Routes>
      </main>
      <FloatingChatButton />
    </div>
  );
};

export default UserDashboard;
