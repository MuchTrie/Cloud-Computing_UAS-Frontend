import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    // Header
    home: 'HOME',
    about: 'ABOUT',
    training: 'TRAINING',
    contact: 'CONTACT',
    startNow: 'START NOW',
    
    // Hero
    buildLegacy: 'BUILD YOUR',
    legacy: 'LEGACY',
    heroSubtitle: 'Your personal AI mentor for peak physical and mental discipline.',
    heroQuote: 'Work hard in silence. Let success be your noise.',
    quoteAuthor: '- Coach Chad',
    execute: 'EXECUTE',
    learnMore: 'LEARN MORE',
    scrollDiscover: 'SCROLL TO DISCOVER',
    
    // About
    meetMentor: 'MEET YOUR',
    mentor: 'MENTOR',
    aboutDescription: 'Coach Chad is not your average fitness trainer. He is the embodiment of discipline, strength, and unwavering focus. Every word carries weight. Every instruction builds legends.',
    thePhilosophy: 'THE PHILOSOPHY',
    philosophyQuote: 'Excellence is not an act, but a habit. You don\'t rise to the level of your goals. You fall to the level of your systems.',
    disciplineOver: 'DISCIPLINE OVER MOTIVATION',
    disciplineDesc: 'Motivation fades. Discipline endures. Build systems, not emotions.',
    silenceOver: 'SILENCE OVER NOISE',
    silenceDesc: 'Let your results speak. Work in silence. Success will be loud enough.',
    legacyOver: 'LEGACY OVER COMFORT',
    legacyDesc: 'Comfort is the enemy of greatness. Choose the path that builds legends.',
    todayQuote: 'Today, we build a legacy. No excuses. Execute.',
    transformed: 'TRANSFORMED',
    commitment: 'COMMITMENT',
    potential: 'POTENTIAL',
    
    // Features
    chadMethod: 'THE CHAD',
    method: 'METHOD',
    featuresSubtitle: 'Four pillars of transformation. No compromise. No excuses.',
    instantPrecision: 'INSTANT PRECISION',
    instantDesc: 'No wasted time. No unnecessary words. Every instruction is calculated for maximum impact.',
    laserFocus: 'LASER FOCUS',
    focusDesc: 'Cut through the noise. Focus on what matters. Build habits that build legends.',
    zeroCompromise: 'ZERO COMPROMISE',
    compromiseDesc: 'No excuses. No shortcuts. Only the path to greatness. Accept nothing less than excellence.',
    legacyBuilding: 'LEGACY BUILDING',
    buildingDesc: 'Every rep builds your empire. Every session writes your story. Become the legend you were meant to be.',
    readyBegin: 'READY TO BEGIN?',
    pathGreatness: 'The path to greatness starts with a single step. Take it now.',
    startTransformation: 'START YOUR TRANSFORMATION',
    
    // CTA
    legacyAwaits: 'YOUR LEGACY',
    awaits: 'AWAITS',
    ctaSubtitle: 'The choice is simple. Remain where you are, or step into greatness. Champions don\'t wait for tomorrow. They execute today.',
    ctaQuote: 'Every master was once a disaster. Every pro was once an amateur. Every icon was once an unknown. But they all had one thing in common: they started.',
    executeNow: 'EXECUTE NOW',
    startToday: 'Start your transformation today',
    learnMethod: 'LEARN THE METHOD',
    discoverPhilosophy: 'Discover the Chad philosophy',
    aiGuidance: 'AI GUIDANCE',
    lifetime: 'LIFETIME',
    finalMessage: 'The time for excuses is over. The time for action is now.',
    
    // Footer
    buildLegacyTagline: 'Build Your Legacy. Execute Excellence. Embrace Greatness.',
    championsQuote: 'Champions are made in silence. Legends speak through results.',
    strengthBuilding: 'Strength Building',
    mentalDiscipline: 'Mental Discipline',
    habitFormation: 'Habit Formation',
    nutritionGuidance: 'Nutrition Guidance',
    alphaMindset: 'Alpha Mindset',
    disciplineMotivation: 'Discipline Over Motivation',
    legacyBuildingNav: 'Legacy Building',
    excellenceStandards: 'Excellence Standards',
    startTraining: 'Start Training',
    support: 'Support',
    joinCommunity: 'Join Community',
    feedback: 'Feedback',
    strength: 'STRENGTH',
    focus: 'FOCUS',
    legacyFooter: 'LEGACY',
    copyright: '© 2025 Coach Chad. Built for Champions. Designed for Legends.',
    motto: 'EXECUTE. EXCEL. ELEVATE.'
  },
  id: {
    // Header
    home: 'BERANDA',
    about: 'TENTANG',
    training: 'LATIHAN',
    contact: 'KONTAK',
    startNow: 'MULAI SEKARANG',
    
    // Hero
    buildLegacy: 'BANGUN',
    legacy: 'LEGASI MU',
    heroSubtitle: 'Mentor AI pribadi untuk disiplin fisik dan mental yang optimal.',
    heroQuote: 'Kerja keras dalam diam. Biarkan kesuksesan menjadi suaramu.',
    quoteAuthor: '- Coach Chad',
    execute: 'EKSEKUSI',
    learnMore: 'PELAJARI LEBIH LANJUT',
    scrollDiscover: 'SCROLL UNTUK MENEMUKAN',
    
    // About
    meetMentor: 'TEMUI',
    mentor: 'MENTOR MU',
    aboutDescription: 'Coach Chad bukan pelatih fitness biasa. Dia adalah perwujudan disiplin, kekuatan, dan fokus yang tak tergoyahkan. Setiap kata memiliki bobot. Setiap instruksi membangun legenda.',
    thePhilosophy: 'FILOSOFI',
    philosophyQuote: 'Keunggulan bukanlah tindakan, tetapi kebiasaan. Kamu tidak naik ke level tujuanmu. Kamu jatuh ke level sistemmu.',
    disciplineOver: 'DISIPLIN ATAS MOTIVASI',
    disciplineDesc: 'Motivasi memudar. Disiplin bertahan. Bangun sistem, bukan emosi.',
    silenceOver: 'DIAM ATAS KEBISINGAN',
    silenceDesc: 'Biarkan hasilmu berbicara. Kerja dalam diam. Kesuksesan akan cukup keras.',
    legacyOver: 'LEGASI ATAS KENYAMANAN',
    legacyDesc: 'Kenyamanan adalah musuh kebesaran. Pilih jalan yang membangun legenda.',
    todayQuote: 'Hari ini, kita membangun legasi. Tanpa alasan. Eksekusi.',
    transformed: 'TERTRANSFORMASI',
    commitment: 'KOMITMEN',
    potential: 'POTENSI',
    
    // Features
    chadMethod: 'METODE',
    method: 'CHAD',
    featuresSubtitle: 'Empat pilar transformasi. Tanpa kompromi. Tanpa alasan.',
    instantPrecision: 'PRESISI INSTAN',
    instantDesc: 'Tanpa waktu terbuang. Tanpa kata yang tidak perlu. Setiap instruksi dihitung untuk dampak maksimal.',
    laserFocus: 'FOKUS LASER',
    focusDesc: 'Tembus kebisingan. Fokus pada yang penting. Bangun kebiasaan yang membangun legenda.',
    zeroCompromise: 'TANPA KOMPROMI',
    compromiseDesc: 'Tanpa alasan. Tanpa jalan pintas. Hanya jalan menuju kebesaran. Tidak menerima yang kurang dari keunggulan.',
    legacyBuilding: 'MEMBANGUN LEGASI',
    buildingDesc: 'Setiap repetisi membangun kerajaanmu. Setiap sesi menulis ceritamu. Jadilah legenda yang memang ditakdirkan.',
    readyBegin: 'SIAP MEMULAI?',
    pathGreatness: 'Jalan menuju kebesaran dimulai dengan satu langkah. Ambil sekarang.',
    startTransformation: 'MULAI TRANSFORMASI MU',
    
    // CTA
    legacyAwaits: 'LEGASI MU',
    awaits: 'MENANTI',
    ctaSubtitle: 'Pilihannya sederhana. Tetap di tempat kamu berada, atau melangkah menuju kebesaran. Para juara tidak menunggu hari esok. Mereka eksekusi hari ini.',
    ctaQuote: 'Setiap master pernah menjadi bencana. Setiap profesional pernah menjadi amatir. Setiap ikon pernah tidak dikenal. Tapi mereka semua memiliki satu kesamaan: mereka memulai.',
    executeNow: 'EKSEKUSI SEKARANG',
    startToday: 'Mulai transformasi mu hari ini',
    learnMethod: 'PELAJARI METODE',
    discoverPhilosophy: 'Temukan filosofi Chad',
    aiGuidance: 'PANDUAN AI',
    lifetime: 'SEUMUR HIDUP',
    finalMessage: 'Waktu untuk alasan sudah berakhir. Waktu untuk aksi adalah sekarang.',
    
    // Footer
    buildLegacyTagline: 'Bangun Legasi Mu. Eksekusi Keunggulan. Rangkul Kebesaran.',
    championsQuote: 'Juara dibuat dalam diam. Legenda berbicara melalui hasil.',
    strengthBuilding: 'Membangun Kekuatan',
    mentalDiscipline: 'Disiplin Mental',
    habitFormation: 'Pembentukan Kebiasaan',
    nutritionGuidance: 'Panduan Nutrisi',
    alphaMindset: 'Pola Pikir Alpha',
    disciplineMotivation: 'Disiplin Atas Motivasi',
    legacyBuildingNav: 'Membangun Legasi',
    excellenceStandards: 'Standar Keunggulan',
    startTraining: 'Mulai Latihan',
    support: 'Dukungan',
    joinCommunity: 'Bergabung Komunitas',
    feedback: 'Umpan Balik',
    strength: 'KEKUATAN',
    focus: 'FOKUS',
    legacyFooter: 'LEGASI',
    copyright: '© 2025 Coach Chad. Dibuat untuk Para Juara. Dirancang untuk Legenda.',
    motto: 'EKSEKUSI. UNGGUL. TINGKATKAN.'
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'id' : 'en');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
