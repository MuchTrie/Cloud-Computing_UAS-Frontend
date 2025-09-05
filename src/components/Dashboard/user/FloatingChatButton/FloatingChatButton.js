import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingChatButton.css';

const FloatingChatButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="cd-chat-btn"
      aria-label="Buka Tanya Coach Chad"
      onClick={() => navigate('/user/chat')}
      title="Tanya Coach Chad"
    >
      💬
    </button>
  );
};

export default FloatingChatButton;