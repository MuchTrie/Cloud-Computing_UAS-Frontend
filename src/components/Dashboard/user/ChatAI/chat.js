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

const API_BASE = (process.env.REACT_APP_API_BASE || '').replace(/\/$/, '');

const ChatAI = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const containerRef = useRef(null);
  const typingIdRef = useRef(null);
  const typeTimerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages]);

  const askBackend = async (userText) => {
    const url = API_BASE ? `${API_BASE}/chat` : '/chat';
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userText })
    });
    let data;
    try { data = await res.json(); } catch { data = {}; }
    if (!res.ok) {
      const msg = data?.error || `HTTP ${res.status}`;
      throw new Error(msg);
    }
    return data.reply || data.output || data.text || '(tanpa balasan)';
  };

  // Typewriter effect: progressively reveals text in-place
  const typeOut = (fullText, msgId, speedMs = 22, chunk = 2) => new Promise((resolve) => {
    // initialize empty text for the target message
    setMessages(prev => prev.map(m => (m.id === msgId ? { ...m, typing: false, text: '' } : m)));
    let i = 0;
    clearInterval(typeTimerRef.current);
    typeTimerRef.current = setInterval(() => {
      i = Math.min(fullText.length, i + chunk);
      const slice = fullText.slice(0, i);
      setMessages(prev => prev.map(m => (m.id === msgId ? { ...m, text: slice } : m)));
      if (i >= fullText.length) {
        clearInterval(typeTimerRef.current);
        resolve();
      }
    }, speedMs);
  });

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isSending) return;
    const userMsg = { role: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsSending(true);
    // add typing indicator bubble first
    const coachTyping = { role: 'coach', typing: true, id: Date.now() };
    typingIdRef.current = coachTyping.id;
    setMessages(prev => [...prev, coachTyping]);
    try {
      const reply = await askBackend(text);
      // after we have reply, type it out in the same bubble
      await typeOut(reply, typingIdRef.current);
    } catch (err) {
      setMessages(prev => prev.map(m => (m.id === typingIdRef.current ? { ...m, typing: false, text: `Error: ${err.message}` } : m)));
    } finally {
      typingIdRef.current = null;
      setIsSending(false);
    }
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
                <div className="text">
                  {m.typing ? (
                    <span className="typing">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </span>
                  ) : (
                    m.text
                  )}
                </div>
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
          <button className="send-btn" onClick={sendMessage} disabled={!input.trim() || isSending}>{isSending ? 'Mengirim...' : 'Kirim'}</button>
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
