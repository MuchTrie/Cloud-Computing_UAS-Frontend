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
  const [showScrollButton, setShowScrollButton] = useState(false);
  const containerRef = useRef(null);
  const typingIdRef = useRef(null);
  const typeTimerRef = useRef(null);

  useEffect(() => {
    // Function to scroll to bottom
    const scrollChatToBottom = () => {
      if (containerRef.current) {
        containerRef.current.scrollTop = containerRef.current.scrollHeight;
      }
    };
    
    // Scroll setiap kali pesan berubah
    scrollChatToBottom();
    
    // Tambahan: scroll ulang setelah delay singkat untuk mengatasi animasi/render
    const timeoutId = setTimeout(scrollChatToBottom, 100);
    
    return () => clearTimeout(timeoutId);
  }, [messages]);
  
  // Deteksi scroll untuk tombol kembali ke bawah - perbaikan
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      // Ubah toleransi jadi 20px saja agar lebih sensitif
      const isScrolledUp = scrollHeight - scrollTop - clientHeight > 20;
      setShowScrollButton(isScrolledUp);
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      
      // Panggil sekali saat mounting untuk set kondisi awal
      setTimeout(() => handleScroll(), 500);
      
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  const conversationIdRef = useRef(null);
  if (!conversationIdRef.current) {
    conversationIdRef.current = Math.random().toString(36).slice(2);
  }

  const askBackend = async (userText) => {
    const url = API_BASE ? `${API_BASE}/chat` : '/chat';
    const payload = { conversationId: conversationIdRef.current, message: userText };
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    let data;
    try { data = await res.json(); } catch { data = {}; }
    if (!res.ok) {
      const msg = data?.error || `HTTP ${res.status}`;
      throw new Error(msg);
    }
    const reply = data.reply || data.output || data.text || data.rawReply;
    if (!reply || !reply.trim()) {
      return 'Belum ada jawaban dari model, coba ulangi atau jelaskan lebih spesifik.';
    }
    return reply;
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
        {/* Dummy div di atas untuk padding */}
        <div style={{ minHeight: '20px' }}></div>
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
        {/* Dummy div di bawah untuk padding dan memastikan scroll */}
        <div style={{ minHeight: '20px' }}></div>
      </div>
      
      {showScrollButton && (
        <button 
          className="scroll-bottom-btn" 
          onClick={scrollToBottom}
          aria-label="Scroll ke bawah"
        >
          <span aria-hidden="true">⬇️</span>
        </button>
      )}
      
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
