import React, { useState, useRef, useEffect } from 'react';
import './chat.css';

const initialMessages = [
  { role: 'coach', text: 'Halo! Saya Coach Chad. Apa fokus utama kamu hari ini?' }
];

const promptSuggestions = [
  'Bagaimana cara memperbaiki squat saya?',
  'Beri saya kutipan motivasi',
  'Ide makanan sehat?',
  'Strategi tingkatkan disiplin?',
];

const ChatAI = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const fakeCoachReply = (userText) => {
    if (/motivasi|quote|kutipan/i.test(userText)) {
      return 'Ingat: Konsistensi mengalahkan intensitas. Lanjutkan satu langkah lebih jauh dari rasa malas.';
    }
    if (/squat/i.test(userText)) {
      return 'Pastikan punggung tetap netral, dorong lutut ke luar, dan kunci nafas (bracing) sebelum turun.';
    }
    if (/makan|sehat|makanan/i.test(userText)) {
      return 'Mulai dengan protein tanpa lemak, sayuran hijau, karbo kompleks, dan cukup air. Hindari gula cair.';
    }
    return 'Catat. Fokus, eksekusi, evaluasi. Ada hal lain yang ingin kamu tanyakan?';
  };

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user', text: input.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setTimeout(() => {
      const reply = fakeCoachReply(userMsg.text);
      setMessages(prev => [...prev, { role: 'coach', text: reply }]);
    }, 450);
  };

  const handleKey = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } };
  const applySuggestion = (p) => { setInput(p); };

  return (
    <div className="chat-wrapper">
      <header className="chat-header">
        <h1>Tanya Coach Chad</h1>
      </header>
      <div className="chat-body" ref={containerRef} aria-label="Riwayat percakapan">
        {messages.map((m,i) => {
          const isUser = m.role === 'user';
          return (
            <div key={i} className={`msg-row ${isUser ? 'user' : 'coach'}`}> 
              {!isUser && (
                <img src="/assets/img/chad_pp.jpeg" alt="Coach Chad" className="avatar" loading="lazy" />
              )}
              <div className={`msg-bubble ${isUser ? 'user' : 'coach'}`}> 
                <div className="meta">{isUser ? 'Kamu' : 'Coach Chad'}</div>
                <div className="text">{m.text}</div>
              </div>
              {isUser && (
                <div className="avatar user-initial" aria-hidden="true">🧑‍💪</div>
              )}
            </div>
          );
        })}
      </div>
      <div className="chat-input-area" aria-label="Kirim pesan ke Coach Chad">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Tulis pertanyaan kamu... (Enter untuk kirim, Shift+Enter baris baru)"
        />
        <div className="chat-actions">
          <button className="send-btn" onClick={sendMessage} disabled={!input.trim()}>Kirim</button>
        </div>
        <div className="suggestions" aria-label="Saran prompt">
          {promptSuggestions.map(p => (
            <button key={p} onClick={() => applySuggestion(p)}>{p}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatAI;
