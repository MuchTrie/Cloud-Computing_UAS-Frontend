import React from 'react';
import './theme.css';
import Sidebar from './Sidebar/Sidebar';
import MissionToday from './MissionToday/MissionToday';
import StatsGrid from './StatsGrid/StatsGrid';
import FloatingChatButton from './FloatingChatButton/FloatingChatButton';

const UserDashboard = () => {
  return (
    <div className="cd-layout">
      <Sidebar />
      <main className="cd-main" aria-label="User dashboard main content">
        <MissionToday />
        <StatsGrid />
      </main>
      <FloatingChatButton />
    </div>
  );
};

export default UserDashboard;
