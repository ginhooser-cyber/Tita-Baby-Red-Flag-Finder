import React, { useState, useEffect, useCallback, useRef } from 'react';
import { GameMode, Scenario, GameStatus, Badge, StreakBadge, LeaderboardEntry } from './types';
import { OFFLINE_SCENARIOS, BADGES, STREAK_BADGES } from './constants';
import { fetchAIScenario } from './services/geminiService';

interface LegendaryStory {
  id: number;
  title: string;
  summary: string;
  fullStory: string;
  tag: string;
  level: string;
  color: string;
}

interface Teknik {
  name: string;
  alias: string;
  description: string;
  icon: string;
}

const RED_FLAG_TEKNIKS: Teknik[] = [
  { name: "Love Bombing", alias: "Pasabog Level 99", description: "Todo bigay sa simula, para kang nasa cloud 9. Yun pala, tactic lang para ma-hook ka agad at ma-control later. Pag nahulog ka na, biglang lalamig.", icon: "💣" },
  { name: "Gaslighting", alias: "Sino Ba Ang Baliw?", description: "Pina-feel sayo na ikaw ang mali, ikaw ang overthinking, o ikaw ang may kasalanan kahit huli na sa akto. Memory manipulation yarn?", icon: "🕯️" },
  { name: "Breadcrumbing", alias: "Pakunswelo de Bobo", description: "Bibigyan ka lang ng sapat na atensyon para 'wag kang umalis, pero never kang gagawing priority. Yung saktong 'Good morning' lang para hindi ka makapag-move on.", icon: "🍞" },
  { name: "Ghosting", alias: "Oplan Multo", description: "Biglang mawawala na parang bula nang walang explanation. Minsan after 3 years, minsan after 1st date. Professional magician ang peg!", icon: "👻" },
  { name: "Benching", alias: "Naka-Reserve Yarn?", description: "Naka-reserve ka lang sa bench. Pag wala siyang ibang magawa o basted siya sa iba, tsaka ka lang tatawagan. Spare tire ka ba, ghorl?", icon: "🪑" },
  { name: "Negging", alias: "Subtle Lait", description: "Backhanded compliments para bumaba ang self-esteem mo. 'Ang ganda mo sana kung hindi ka mataba.' Logic: para mapilitan kang maghabol ng validation sa kanya.", icon: "📉" },
  { name: "Orbiting", alias: "Satelliteng Papansin", description: "Naka-ghost na o break na kayo pero panay 'Like' at 'View' pa rin sa stories mo. Hindi lumalapit pero hindi lumalayo. Gulong-gulo yarn?", icon: "🪐" },
  { name: "Future Faking", alias: "Drawing Master", description: "Laging pinag-uusapan ang kasal, bahay, at anak niyo kahit 1 week pa lang kayong magkakilala. All talk, zero effort, pure fantasy.", icon: "🏰" }
];

const LEGENDARY_STORIES: LegendaryStory[] = [
  {
    id: 1,
    title: "Ang Multong Jowa",
    summary: "Sabi niya out of town lang siya, yun pala out of relationship na kami. 3 years kaming dating, biglang nawala.",
    fullStory: "Imagine mo ghorl, 3 years kayong legal sa pamilya, tapos isang gabi sabi niya 'Punta lang akong Batangas saglit, mahina signal'. Yun pala, sa ibang planeta na siya pumunta! Blocked ako sa lahat, as in ghosting to the highest level. Nalaman ko na lang after a month sa IG ng pinsan niya, kinasal na pala sa iba sa abroad! Anak ng tinapa, galing umarte, pang-FAMAS awardee!",
    tag: "PINAKAMALAKING RED FLAG",
    level: "Ghosting Level: Infinity",
    color: "red"
  },
  {
    id: 2,
    title: "The 'Family First' Scammer",
    summary: "Sinabi niya lahat ng pera niya napupunta sa nanay niya, yun pala may ibang pamilya na pala siyang pinapakain.",
    fullStory: "Akala ko napaka-bait na anak. Tuwing date namin, siomai lang kinakain namin kasi 'tipid daw para kay Mama'. Todo support naman ako, pati pang-load niya ako na nagbabayad. Isang araw, nakita ko siya sa mall, may kargang baby at may kasamang babaeng kamukha nung 'pinsan' niya sa FB. Ayun pala, yung 'Mama' na pinapadalhan niya, yung nanay nung bata! Investment scam yarn? Ineng, 'wag kang bulag!",
    tag: "SUSMARYOSEP LEVEL",
    level: "Financial & Emotional Scammer",
    color: "yellow"
  },
  {
    id: 3,
    title: "Ballpen is Life",
    summary: "Isang ballpen lang ang pinahiram sa buong semester pero sinisingil ako ng emotional investment lifetime?",
    fullStory: "Eto yung pinaka-petty na nakilala ko. Hiniram ko lang yung Pilot G-tech niya nung finals kasi nawala yung akin. Simula nun, tuwing may kailangan siya, 'O, diba pinahiram kita ng ballpen?'. Kahit pag-gawa ng assignment niya, ako na gumagawa kasi 'utang na loob' ko daw yung ballpen. Ghorl, 85 pesos lang 'yung ballpen, yung pagod ko pang-doktor na! Wag kang pa-api sa mga taong kalkulado pati tinta!",
    tag: "PETTY ALERT",
    level: "Manipulation Master",
    color: "pink"
  },
  {
    id: 4,
    title: "The 'Soft Launch' Saboteur",
    summary: "Laging likod ng ulo lang ang pino-post, nalaman ko na lang na album na pala ako ng iba't ibang babae sa gallery niya.",
    fullStory: "Feeling influencer si Kuya, laging 'Soft Launch' ang drama sa IG Stories. Sabi niya 'Privacy is luxury'. Isang gabi, napanaginipan ko password niya, chineck ko yung 'Hidden' folder. Ghorl! Hindi lang pala ako ang 'Soft Launch'! May 'Likod ng Ulo - Monday', 'Siko sa Coffee Shop - Tuesday', at 'Anino sa Kotse - Wednesday'. Para kaming puzzle pieces na hindi mabuo-buo. Wag kang papayag na maging anino lang, be the main character!",
    tag: "CLOUT CHASER",
    level: "Privacy or Multi-tasking?",
    color: "purple"
  },
  {
    id: 5,
    title: "Ang Investment ni Kuya",
    summary: "Inaya ako sa business meeting, yun pala networking at kailangan ko maglabas ng 50k para maging 'diamond member'.",
    fullStory: "Sabi niya 'date' daw kami sa upscale restaurant. Naka-barong pa si gago. Pag-upo namin, biglang naglabas ng whiteboard! 'Open minded ka ba sa business?' daw. Imbes na bulaklak, 'Power!' ang isinalubong sakin. Gusto niya gamitin ko yung savings ko para sa 'Downpayment ng Future' namin. Ghorl, ang future ko ay hindi kailangan ng recruitment! Next time na may mag-invite sayo ng business meeting sa date, tumakbo ka na parang hinahabol ng bumbay!",
    tag: "NETWORKING GURU",
    level: "Scamming with a Smile",
    color: "indigo"
  }
];

const MOCK_LEADERBOARD_NAMES = [
  "Tita Baby", "Marites Prime", "Aling Susan", "Mosang Queen", "Tea Spiller", 
  "Chika Babe", "Judgerist 3000", "Red Flag Hunter", "Madam K", "Tita of Manila"
];

const App: React.FC = () => {
  const [status, setStatus] = useState<GameStatus>('START');
  const [mode, setMode] = useState<GameMode>(GameMode.YOUNG_ADULT);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentScenario, setCurrentScenario] = useState<Scenario | null>(null);
  const [lastFeedback, setLastFeedback] = useState<{ type: 'TAMA' | 'MALI', text: string } | null>(null);
  const [swiping, setSwiping] = useState<'left' | 'right' | null>(null);
  const [badges, setBadges] = useState<string[]>([]);
  const [earnedStreakBadges, setEarnedStreakBadges] = useState<number[]>([]);
  const [activeMilestone, setActiveMilestone] = useState<StreakBadge | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdPlaying, setIsAdPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRedFlagInfoOpen, setIsRedFlagInfoOpen] = useState(false);
  const [isTekniksUnlocked, setIsTekniksUnlocked] = useState(false);
  const [isStoriesUnlocked, setIsStoriesUnlocked] = useState(false);
  const [selectedStory, setSelectedStory] = useState<LegendaryStory | null>(null);
  const [diaryContent, setDiaryContent] = useState('');
  
  // Store & Leaderboard State
  const [wallet, setWallet] = useState(0);
  const [nickname, setNickname] = useState<string | null>(null);
  const [newNicknameInput, setNewNicknameInput] = useState('');
  const [highScore, setHighScore] = useState(0);

  // Timer State
  const [timeLeft, setTimeLeft] = useState(20);
  const [maxTime, setMaxTime] = useState(20);
  const [cooldownTimeStr, setCooldownTimeStr] = useState<string | null>(null);

  const [playedIndices, setPlayedIndices] = useState<Set<number>>(new Set());

  const [dragX, setDragX] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const SWIPE_THRESHOLD = 80;

  const audioContextRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    // Initial Life Check
    const storedLives = localStorage.getItem('tita_lives');
    const deathTime = localStorage.getItem('tita_death_time');

    if (storedLives !== null) {
      let parsedLives = parseInt(storedLives);
      if (parsedLives === 0 && deathTime) {
        const elapsed = Date.now() - parseInt(deathTime);
        if (elapsed >= 3600000) { // 1 Hour Lockout
          setLives(3);
          localStorage.setItem('tita_lives', '3');
          localStorage.removeItem('tita_death_time');
        } else {
          setLives(0);
        }
      } else {
        setLives(parsedLives);
      }
    } else {
      // First time user
      setLives(3);
      localStorage.setItem('tita_lives', '3');
    }

    const savedDiary = localStorage.getItem('tita_baby_diary');
    if (savedDiary) setDiaryContent(savedDiary);
    
    const tekniksUnlocked = localStorage.getItem('tita_baby_tekniks_unlocked');
    if (tekniksUnlocked === 'true') setIsTekniksUnlocked(true);

    const storiesUnlocked = localStorage.getItem('tita_baby_stories_unlocked');
    if (storiesUnlocked === 'true') setIsStoriesUnlocked(true);

    // Load Wallet & Nickname
    const savedWallet = localStorage.getItem('tita_wallet');
    if (savedWallet) setWallet(parseInt(savedWallet));

    const savedNickname = localStorage.getItem('tita_nickname');
    if (savedNickname) setNickname(savedNickname);

    const savedHighScore = localStorage.getItem('tita_high_score');
    if (savedHighScore) setHighScore(parseInt(savedHighScore));

  }, []);

  // Cooldown Countdown Timer
  useEffect(() => {
    if (lives > 0) {
      setCooldownTimeStr(null);
      return;
    }

    const interval = setInterval(() => {
      const deathTime = localStorage.getItem('tita_death_time');
      if (!deathTime) return;

      const LOCKOUT_DURATION = 3600000; // 1 hour
      const targetTime = parseInt(deathTime) + LOCKOUT_DURATION;
      const diff = targetTime - Date.now();

      if (diff <= 0) {
        // Cooldown over, auto-restore
        setLives(3);
        localStorage.setItem('tita_lives', '3');
        localStorage.removeItem('tita_death_time');
        setCooldownTimeStr(null);
        clearInterval(interval);
      } else {
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        setCooldownTimeStr(`${m}m ${s}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [lives]);

  const updateLives = (newLives: number) => {
    setLives(newLives);
    localStorage.setItem('tita_lives', newLives.toString());
    if (newLives === 0) {
      localStorage.setItem('tita_death_time', Date.now().toString());
    }
  };

  const handleBuyNickname = () => {
    if (wallet >= 1000 && newNicknameInput.trim() !== '') {
      const newWallet = wallet - 1000;
      setWallet(newWallet);
      setNickname(newNicknameInput.trim());
      localStorage.setItem('tita_wallet', newWallet.toString());
      localStorage.setItem('tita_nickname', newNicknameInput.trim());
      playSound('ding');
      alert(`Welcome to the elite circle, ${newNicknameInput}!`);
    } else {
      playSound('buzz');
    }
  };

  const saveDiary = () => {
    localStorage.setItem('tita_baby_diary', diaryContent);
    playSound('ding');
    alert('Saved na, ghorl! Safe ang secrets mo kay Tita.');
  };

  const clearDiary = () => {
    if (confirm('Sigurado ka, ineng? Buburahin na natin ang lahat ng ebidensya?')) {
      setDiaryContent('');
      localStorage.removeItem('tita_baby_diary');
      playSound('buzz');
    }
  };

  const initAudio = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (audioContextRef.current.state === 'suspended') {
      audioContextRef.current.resume();
    }
  };

  const playSound = (type: 'ding' | 'buzz' | 'click' | 'milestone') => {
    initAudio();
    const ctx = audioContextRef.current!;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    const now = ctx.currentTime;

    if (type === 'ding') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.3);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'buzz') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.linearRampToValueAtTime(55, now + 0.4);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'click') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(150, now);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'milestone') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.linearRampToValueAtTime(880, now + 0.1);
      osc.frequency.linearRampToValueAtTime(440, now + 0.2);
      osc.frequency.linearRampToValueAtTime(880, now + 0.5);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.5);
      osc.start(now);
      osc.stop(now + 0.5);
    }
  };

  const getTimerDuration = (currentStreak: number) => {
    if (currentStreak >= 300) return 3;
    if (currentStreak >= 100) return 5;
    if (currentStreak >= 50) return 10;
    if (currentStreak >= 20) return 15;
    return 20;
  };

  const loadNextScenario = useCallback(async () => {
    setIsLoading(true);
    let scenario: Scenario | null = null;
    
    // Calculate and set timer based on current streak
    const duration = getTimerDuration(streak);
    setTimeLeft(duration);
    setMaxTime(duration);

    const modeIndices = OFFLINE_SCENARIOS.map((s, i) => s.category === mode ? i : -1).filter(i => i !== -1);
    const unplayedIndices = modeIndices.filter(i => !playedIndices.has(i));

    if (unplayedIndices.length >= 20 || !process.env.API_KEY) {
      if (unplayedIndices.length > 0) {
        const randomIndex = unplayedIndices[Math.floor(Math.random() * unplayedIndices.length)];
        scenario = OFFLINE_SCENARIOS[randomIndex];
        setPlayedIndices(prev => new Set(prev).add(randomIndex));
      } else {
        setPlayedIndices(new Set());
        const randomIndex = modeIndices[Math.floor(Math.random() * modeIndices.length)];
        scenario = OFFLINE_SCENARIOS[randomIndex];
      }
    } else {
      scenario = await fetchAIScenario(mode);
      if (!scenario && unplayedIndices.length > 0) {
        const randomIndex = unplayedIndices[Math.floor(Math.random() * unplayedIndices.length)];
        scenario = OFFLINE_SCENARIOS[randomIndex];
        setPlayedIndices(prev => new Set(prev).add(randomIndex));
      } else if (!scenario) {
        setPlayedIndices(new Set());
        const randomIndex = modeIndices[Math.floor(Math.random() * modeIndices.length)];
        scenario = OFFLINE_SCENARIOS[randomIndex];
      }
    }
    
    setCurrentScenario(scenario);
    setIsLoading(false);
    setSwiping(null);
    setDragX(0);
  }, [mode, playedIndices, streak]);

  const handleGameOver = () => {
    setStatus('GAME_OVER');
    const newWallet = wallet + score;
    setWallet(newWallet);
    localStorage.setItem('tita_wallet', newWallet.toString());

    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('tita_high_score', score.toString());
    }
  };

  const handleTimeout = useCallback(() => {
    playSound('buzz');
    const newLives = lives - 1;
    updateLives(newLives); // Persist
    setStreak(0);
    setScore(prev => Math.max(0, prev - 50));
    setLastFeedback({ type: 'MALI', text: "NAKU GHORL, BAGAL!" });
    if (window.navigator.vibrate) window.navigator.vibrate(500);

    if (newLives <= 0) {
      setTimeout(() => handleGameOver(), 1000);
    } else {
      setStatus('WISDOM');
    }
  }, [lives, score, wallet, highScore]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (status === 'PLAYING' && !isLoading && !swiping && currentScenario) {
      if (timeLeft > 0) {
        interval = setInterval(() => {
          setTimeLeft((prev) => prev - 1);
        }, 1000);
      } else {
        handleTimeout();
      }
    }
    return () => clearInterval(interval);
  }, [status, isLoading, swiping, currentScenario, timeLeft, handleTimeout]);

  const handleStart = () => {
    if (lives <= 0) {
      playSound('buzz');
      return; 
    }
    playSound('click');
    setScore(0);
    setStreak(0);
    setBadges([]);
    setEarnedStreakBadges([]);
    setPlayedIndices(new Set());
    setStatus('PLAYING');
    loadNextScenario();
  };

  const watchAdForHeart = () => {
    // Allows watching ads even if lives are 0 to bypass cooldown
    if (lives >= 3 && status === 'PLAYING') return;
    playSound('click');
    setIsAdPlaying(true);
    setTimeout(() => {
      setIsAdPlaying(false);
      const newLives = Math.min(lives + 1, 3);
      updateLives(newLives);
      // Remove cooldown if they were dead
      localStorage.removeItem('tita_death_time');
      
      if (status === 'GAME_OVER') {
        setStatus('PLAYING');
        loadNextScenario();
      }
    }, 2500);
  };

  const checkBadges = (currentScore: number) => {
    const earned = BADGES.filter(b => currentScore >= b.threshold).map(b => b.id);
    setBadges(earned);
  };

  const checkStreakMilestones = (currentStreak: number) => {
    if (currentStreak >= 10 && !isStoriesUnlocked) {
      setIsStoriesUnlocked(true);
      localStorage.setItem('tita_baby_stories_unlocked', 'true');
    }
    if (currentStreak >= 20 && !isTekniksUnlocked) {
      setIsTekniksUnlocked(true);
      localStorage.setItem('tita_baby_tekniks_unlocked', 'true');
    }
    const milestone = STREAK_BADGES.find(sb => sb.streak === currentStreak);
    if (milestone) {
      setEarnedStreakBadges(prev => [...new Set([...prev, milestone.streak])]);
      setActiveMilestone(milestone);
      playSound('milestone');
    }
  };

  const handleDecision = useCallback((choiceIsRed: boolean) => {
    if (!currentScenario || swiping) return;

    const isCorrect = choiceIsRed === currentScenario.isRedFlag;
    setSwiping(choiceIsRed ? 'right' : 'left');

    setTimeout(() => {
      if (isCorrect) {
        playSound('ding');
        const newScore = score + 10; // UPDATED SCORING: +10 instead of +100
        const newStreak = streak + 1;
        setScore(newScore);
        setStreak(newStreak);
        checkBadges(newScore);
        checkStreakMilestones(newStreak);
        setLastFeedback({ type: 'TAMA', text: 'Correct Ka Jan!' });
        // Short, sharp vibration for correct
        if (window.navigator.vibrate) window.navigator.vibrate(40);
      } else {
        playSound('buzz');
        const newLives = lives - 1;
        updateLives(newLives); // Persist
        setStreak(0);
        setScore(prev => Math.max(0, prev - 50));
        setLastFeedback({ type: 'MALI', text: 'NAKU GHORL, TANGA!' });
        // Longer, jarring vibration pattern for incorrect
        if (window.navigator.vibrate) window.navigator.vibrate([200, 50, 200]);

        if (newLives <= 0) {
          setTimeout(() => handleGameOver(), 1000);
          return;
        }
      }
      setStatus('WISDOM');
    }, 500); 
  }, [currentScenario, swiping, score, lives, streak, isTekniksUnlocked, isStoriesUnlocked]);

  const handleDragStart = (clientX: number) => {
    if (isLoading || status !== 'PLAYING' || swiping) return;
    setStartX(clientX);
    setIsDragging(true);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || startX === null) return;
    const currentDrag = clientX - startX;
    setDragX(currentDrag);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (dragX > SWIPE_THRESHOLD) handleDecision(true);
    else if (dragX < -SWIPE_THRESHOLD) handleDecision(false);
    else setDragX(0);
    setStartX(null);
  };

  const renderStartScreen = () => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center relative">
      <button 
        onClick={() => { playSound('click'); setIsMenuOpen(true); }} 
        className="absolute top-6 left-6 w-14 h-14 bg-white/30 backdrop-blur-lg rounded-2xl flex items-center justify-center hover:bg-white/40 transition-all active:scale-90 shadow-[0_0_20px_rgba(0,0,0,0.4)] z-[60] border border-white/40 border-b-4 border-r-4"
      >
        <i className="fas fa-bars text-2xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"></i>
      </button>

      <div className="absolute top-6 right-6 flex flex-col gap-2 items-end">
        <button 
          onClick={() => { playSound('click'); setStatus('PROFILE'); }} 
          className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] ring-2 ring-white/20 group active:scale-90 z-50 border border-white/30"
        >
          <i className="fas fa-gem text-2xl text-yellow-400 group-hover:rotate-12 transition-transform drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]"></i>
        </button>
        <button 
          onClick={() => { playSound('click'); setStatus('STORE'); }} 
          className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] ring-2 ring-white/20 group active:scale-90 z-50 border border-white/30"
        >
          <i className="fas fa-store text-2xl text-pink-300 group-hover:scale-110 transition-transform"></i>
        </button>
        {nickname && (
           <button 
            onClick={() => { playSound('click'); setStatus('LEADERBOARD'); }} 
            className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] ring-2 ring-white/20 group active:scale-90 z-50 border border-white/30"
          >
            <i className="fas fa-trophy text-2xl text-yellow-400 group-hover:scale-110 transition-transform"></i>
          </button>
        )}
      </div>

      <div className="text-8xl mb-4 animate-bounce-slow">💅</div>
      <h1 className="font-tita text-4xl mb-2 text-pink-300 drop-shadow-lg">Tita Baby</h1>
      <p className="text-xl mb-4 italic">
        "The <span 
          onClick={() => { playSound('click'); setIsRedFlagInfoOpen(true); }}
          className="cursor-pointer hover:animate-wiggle transition-all duration-300 font-bold not-italic px-1"
        >Red Flag</span> Guru"
      </p>
      
      <div className="mb-6 bg-black/30 px-6 py-2 rounded-full border border-white/20">
         <p className="text-xs uppercase tracking-widest text-pink-200">Wallet Points</p>
         <p className="text-2xl font-black font-mono text-yellow-400">{wallet.toLocaleString()}</p>
      </div>

      {lives <= 0 ? (
        <div className="glass w-full p-6 rounded-2xl mb-8 border border-red-500/50 bg-red-900/20">
          <p className="text-xl font-bold text-red-300 mb-2">UBOS NA ANG PASENSYA KO!</p>
          <p className="text-sm opacity-80 mb-4">You lost 3 hearts. Mag-muni muni ka muna.</p>
          <p className="text-3xl font-mono font-black text-yellow-400 mb-2">{cooldownTimeStr || "Calculating..."}</p>
          <p className="text-xs uppercase tracking-widest opacity-60">Wait time to recharge</p>
          <button onClick={watchAdForHeart} className="mt-4 bg-yellow-500 text-indigo-900 font-black px-6 py-3 rounded-full text-sm shadow-xl hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-2 w-full">
            <i className="fas fa-video"></i> WATCH AD (SKIP WAIT)
          </button>
        </div>
      ) : (
        <>
          <div className="glass w-full p-6 rounded-2xl mb-8">
            <label className="block text-sm font-semibold mb-2 opacity-80 uppercase tracking-widest text-pink-100">Anong topic natin ghurl?</label>
            <select 
              value={mode}
              onChange={(e) => {
                playSound('click');
                setMode(e.target.value as GameMode);
                setPlayedIndices(new Set());
              }}
              className="w-full bg-white/20 p-3 rounded-lg border border-white/30 text-white focus:outline-none appearance-none cursor-pointer hover:scale-105 transition-transform active:scale-95"
            >
              <option value={GameMode.TEENS} className="text-black">Teens (School Drama)</option>
              <option value={GameMode.YOUNG_ADULT} className="text-black">Young Adult (Dating Purgatory)</option>
              <option value={GameMode.ADULT} className="text-black">Adult (Real Talk & Bills)</option>
            </select>
          </div>
          <button onClick={handleStart} className="bg-white text-indigo-900 font-bold px-12 py-4 rounded-full text-xl shadow-xl hover:scale-105 transition-transform active:scale-95">
            Red Flag Kaya?
          </button>
        </>
      )}
      
      <div className="absolute bottom-4 text-[10px] opacity-40 hover:opacity-100 transition-opacity">
        <a href="https://launchdaystudio.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300 transition-colors font-medium tracking-wide">
          Connect with developer: launchdaystudio.com
        </a>
      </div>
    </div>
  );

  const renderStore = () => (
    <div className="flex flex-col h-full p-6 bg-[#1a1a2e] overflow-hidden relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-tita text-3xl text-pink-300 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">Tita's Tindahan</h2>
        <button onClick={() => setStatus('START')} className="w-12 h-12 glass rounded-full flex items-center justify-center text-xl shadow-lg active:scale-90 border border-white/20"><i className="fas fa-times"></i></button>
      </div>

      <div className="flex-1 overflow-y-auto space-y-6">
        <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 p-6 rounded-3xl border border-white/10 flex flex-col items-center">
           <p className="text-xs uppercase tracking-widest opacity-70 mb-1">Your Wallet</p>
           <p className="text-4xl font-mono font-black text-yellow-400">{wallet.toLocaleString()} <span className="text-lg">pts</span></p>
        </div>

        <div className="glass p-6 rounded-[2rem] border-l-8 border-yellow-500 shadow-xl relative overflow-hidden">
           <div className="absolute -right-4 -top-4 text-9xl opacity-5 pointer-events-none">🏷️</div>
           <h3 className="text-2xl font-black text-white mb-2">Nickname Registration</h3>
           <p className="text-sm opacity-80 mb-6">Buy a nickname to unlock the Global Leaderboard and flex your stats!</p>
           
           {nickname ? (
             <div className="bg-green-500/20 border border-green-500/50 p-4 rounded-xl text-center">
                <p className="text-green-300 font-bold uppercase text-xs mb-1">REGISTERED AS</p>
                <p className="text-2xl font-black text-white">"{nickname}"</p>
                <button onClick={() => setStatus('LEADERBOARD')} className="mt-4 bg-white text-green-900 font-bold px-6 py-2 rounded-full text-sm w-full">VIEW LEADERBOARD</button>
             </div>
           ) : (
             <div className="space-y-4">
               <input 
                  type="text" 
                  value={newNicknameInput}
                  onChange={(e) => setNewNicknameInput(e.target.value)}
                  placeholder="Enter sassy nickname..."
                  maxLength={12}
                  className="w-full bg-black/30 border border-white/20 rounded-xl p-4 text-center text-lg font-bold focus:outline-none focus:border-pink-500 transition-colors"
               />
               <button 
                  onClick={handleBuyNickname}
                  disabled={wallet < 1000}
                  className={`w-full py-4 rounded-xl font-black uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 ${wallet >= 1000 ? 'bg-yellow-500 text-indigo-900 hover:scale-105 active:scale-95' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
               >
                 {wallet >= 1000 ? (
                   <>BUY FOR 1,000 PTS</>
                 ) : (
                   <>NEED {(1000 - wallet).toLocaleString()} MORE PTS</>
                 )}
               </button>
             </div>
           )}
        </div>
      </div>
    </div>
  );

  const renderLeaderboard = () => {
    // Generate leaderboard data
    let leaderboardData: LeaderboardEntry[] = MOCK_LEADERBOARD_NAMES.map((name, i) => ({
      rank: 0,
      name,
      score: 5000 - (i * 450) + Math.floor(Math.random() * 200),
      streak: Math.floor(Math.random() * 50) + 5
    }));

    if (nickname) {
      leaderboardData.push({
        rank: 0,
        name: nickname,
        score: highScore,
        streak: 0, // Current streak isn't persisted globally in this simple version, using 0 or highscore implies logic
        isUser: true
      });
    }

    leaderboardData.sort((a, b) => b.score - a.score);
    leaderboardData = leaderboardData.map((entry, index) => ({ ...entry, rank: index + 1 }));

    return (
      <div className="flex flex-col h-full p-6 bg-[#1a1a2e] overflow-hidden relative">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-tita text-3xl text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Leaderboard</h2>
          <button onClick={() => setStatus('START')} className="w-12 h-12 glass rounded-full flex items-center justify-center text-xl shadow-lg active:scale-90 border border-white/20"><i className="fas fa-times"></i></button>
        </div>

        <div className="flex-1 glass rounded-3xl overflow-hidden flex flex-col border-yellow-500/30">
           <div className="bg-yellow-500/10 p-4 flex justify-between text-[10px] uppercase font-black tracking-widest text-yellow-200 border-b border-white/10">
              <span className="w-8 text-center">#</span>
              <span className="flex-1 pl-4">Name</span>
              <span className="w-20 text-right">Score</span>
           </div>
           <div className="overflow-y-auto flex-1 p-2 space-y-2">
              {leaderboardData.map((entry) => (
                <div key={entry.rank} className={`flex items-center p-3 rounded-xl ${entry.isUser ? 'bg-pink-500/30 border border-pink-500' : 'bg-white/5 border border-transparent'}`}>
                   <span className={`w-8 text-center font-black ${entry.rank <= 3 ? 'text-yellow-400 text-xl' : 'opacity-50'}`}>
                     {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : entry.rank}
                   </span>
                   <div className="flex-1 pl-4 flex flex-col">
                      <span className={`font-bold ${entry.isUser ? 'text-pink-200' : 'text-white'}`}>{entry.name} {entry.isUser && '(You)'}</span>
                      {entry.rank <= 3 && <span className="text-[9px] uppercase text-yellow-400 opacity-70">Top Marites</span>}
                   </div>
                   <span className="w-20 text-right font-mono font-bold opacity-80">{entry.score.toLocaleString()}</span>
                </div>
              ))}
           </div>
           {nickname && (
             <div className="p-4 bg-white/10 border-t border-white/10 text-center">
               <p className="text-xs opacity-60">Your High Score: <span className="text-white font-bold">{highScore.toLocaleString()}</span></p>
             </div>
           )}
        </div>
      </div>
    );
  };

  const renderGame = () => (
    <div className="flex flex-col h-full p-6 relative">
      <div className="flex justify-between items-start mb-2 z-20">
        <div className="flex flex-col gap-2">
           <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <i key={i} className={`fas fa-heart text-2xl transition-all duration-300 ${i < lives ? 'text-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]' : 'text-gray-600 opacity-20'}`}></i>
              ))}
            </div>
            {lives < 3 && (
              <button onClick={watchAdForHeart} className="bg-yellow-500/80 text-[10px] font-black uppercase tracking-tighter px-2 py-1 rounded-md flex items-center gap-1 animate-pulse border border-yellow-300/50 shadow-lg self-start">
                <i className="fas fa-video text-[8px]"></i>
                Another Chance
              </button>
            )}
        </div>
        <div className="flex gap-4">
          <div className="text-center">
            <p className="text-[10px] uppercase opacity-60 font-black tracking-widest">Streak</p>
            <p className="text-2xl font-black font-mono tracking-tighter text-yellow-400 drop-shadow-md">{streak} <i className="fas fa-fire ml-1 text-sm"></i></p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase opacity-60 font-black tracking-widest">Marites Score</p>
            <p className="text-2xl font-black font-mono tracking-tighter text-pink-300">{score}</p>
          </div>
        </div>
      </div>

      {/* Timer Bar */}
      <div className="w-full h-1.5 bg-white/10 mb-4 rounded-full overflow-hidden z-20">
        <div 
          className={`h-full transition-all duration-1000 ease-linear ${timeLeft <= 5 ? 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]' : 'bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.6)]'}`} 
          style={{ width: `${(timeLeft / maxTime) * 100}%` }}
        ></div>
      </div>

      <div className="flex-1 flex items-center justify-center relative touch-none">
        <div className="card-stack-bg glass opacity-20 translate-y-2 scale-95"></div>
        <div className="card-stack-bg glass opacity-40 translate-y-6 scale-90"></div>
        {isLoading ? (
          <div className="text-center z-10">
            <i className="fas fa-spinner fa-spin text-5xl mb-4 text-pink-300"></i>
            <p className="font-bold tracking-widest uppercase text-xs">Nag-iisip pa si Tita...</p>
          </div>
        ) : currentScenario && (
          <div onTouchStart={(e) => handleDragStart(e.touches[0].clientX)} onTouchMove={(e) => handleDragMove(e.touches[0].clientX)} onTouchEnd={handleDragEnd} onMouseDown={(e) => handleDragStart(e.clientX)} onMouseMove={(e) => handleDragMove(e.clientX)} onMouseUp={handleDragEnd} onMouseLeave={handleDragEnd}
            style={{ 
              transform: swiping ? undefined : `translateX(${dragX}px) rotate(${dragX * 0.1}deg) scale(${1 - Math.min(Math.abs(dragX) / 1000, 0.1)})`,
              backgroundColor: swiping ? (swiping === 'left' ? 'rgba(34, 197, 94, 0.4)' : 'rgba(239, 68, 68, 0.4)') : (dragX > 20 ? `rgba(239, 68, 68, ${Math.min(dragX / 400, 0.3)})` : dragX < -20 ? `rgba(34, 197, 94, ${Math.min(Math.abs(dragX) / 400, 0.3)})` : 'rgba(255, 255, 255, 0.15)'),
              transition: isDragging ? 'none' : 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), background-color 0.3s ease'
            }}
            className={`glass w-full aspect-[3/4] rounded-3xl p-8 flex flex-col justify-center text-center shadow-2xl swipe-card cursor-grab active:cursor-grabbing relative overflow-hidden ${swiping === 'left' ? 'swipe-left' : swiping === 'right' ? 'swipe-right' : ''}`}>
            {(dragX < -20 || swiping === 'left') && <div style={{ opacity: swiping === 'left' ? 1 : Math.min(Math.abs(dragX) / 80, 1) }} className={`absolute top-10 left-10 border-4 border-green-500 text-green-500 px-6 py-2 rounded-xl font-bold text-3xl rotate-[-20deg] z-20 pointer-events-none ${Math.abs(dragX) > SWIPE_THRESHOLD ? 'indicator-pulse' : ''}`}>GREEN FLAG</div>}
            {(dragX > 20 || swiping === 'right') && <div style={{ opacity: swiping === 'right' ? 1 : Math.min(Math.abs(dragX) / 80, 1) }} className={`absolute top-10 right-10 border-4 border-red-500 text-red-500 px-6 py-2 rounded-xl font-bold text-3xl rotate-[20deg] z-20 pointer-events-none ${Math.abs(dragX) > SWIPE_THRESHOLD ? 'indicator-pulse' : ''}`}>RED FLAG</div>}
            <div className="text-7xl mb-8 opacity-40 pointer-events-none"><i className={`fas ${mode === GameMode.TEENS ? 'fa-graduation-cap' : mode === GameMode.YOUNG_ADULT ? 'fa-briefcase' : 'fa-hand-holding-usd'}`}></i></div>
            <p className="text-2xl font-bold leading-tight pointer-events-none drop-shadow-md select-none px-4">{currentScenario.text}</p>
            <div className="mt-12 flex flex-col items-center gap-2 opacity-50 font-bold tracking-widest pointer-events-none">
              <div className="flex gap-8 text-xs"><span><i className="fas fa-arrow-left mr-2"></i>GREEN</span><span>RED<i className="fas fa-arrow-right ml-2"></i></span></div>
              <p className="text-[10px] uppercase">Isip muna bago swipe, ghorl!</p>
            </div>
          </div>
        )}
      </div>

      <div className="h-16 flex items-center justify-center text-center px-4">
        <p className="opacity-50 italic text-sm font-medium leading-tight select-none">"Hala sige, judge pa more! Swipe Left for Green, Right for Red."</p>
      </div>
    </div>
  );

  const renderDiary = () => (
    <div className="flex flex-col h-full p-6 bg-[#1a1a2e] overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-tita text-3xl text-pink-300 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">Diary ni Ghorl</h2>
        <button onClick={() => setStatus('START')} className="w-12 h-12 glass rounded-full flex items-center justify-center text-xl shadow-lg active:scale-90 border border-white/20"><i className="fas fa-times"></i></button>
      </div>
      <div className="flex-1 glass rounded-3xl p-8 relative overflow-hidden flex flex-col border-pink-500/40 shadow-inner bg-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(#fff 0px, #fff 1px, transparent 1px, transparent 32px)' }}></div>
        <textarea 
          value={diaryContent}
          onChange={(e) => setDiaryContent(e.target.value)}
          placeholder="I-spell out ang chika dito... Wag kang papahuli kay Tita! Secrets strictly stored on your phone only!"
          className="w-full h-full bg-transparent border-none focus:outline-none resize-none text-xl leading-[32px] relative z-10 font-medium placeholder:opacity-30 text-white drop-shadow-sm"
        />
      </div>
      <div className="flex gap-4 mt-8 pb-4">
        <button onClick={saveDiary} className="flex-1 bg-gradient-to-r from-pink-600 to-pink-500 p-5 rounded-2xl font-black shadow-[0_10px_30px_rgba(236,72,153,0.4)] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-lg">
          <i className="fas fa-save"></i> I-SAVE ITO
        </button>
        <button onClick={clearDiary} className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center hover:bg-red-500/50 transition-all border border-white/20">
          <i className="fas fa-trash-alt text-xl text-red-400"></i>
        </button>
      </div>
    </div>
  );

  const renderStories = () => (
    <div className="flex flex-col h-full p-6 bg-[#1a1a2e] overflow-y-auto relative">
      <div className="flex justify-between items-center mb-8 sticky top-0 bg-[#1a1a2e] py-6 z-10 border-b border-white/10">
        <h2 className="font-tita text-4xl text-purple-300 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]">Red Flag Chronicles</h2>
        <button onClick={() => setStatus('START')} className="w-12 h-12 glass rounded-full flex items-center justify-center shadow-lg active:scale-90 border border-white/20"><i className="fas fa-times text-xl"></i></button>
      </div>
      <div className="space-y-8 pb-12">
        {LEGENDARY_STORIES.map(story => (
          <div 
            key={story.id} 
            onClick={() => { playSound('click'); setSelectedStory(story); }}
            className={`glass p-8 rounded-[2.5rem] border-l-8 cursor-pointer transform hover:scale-[1.02] transition-all shadow-[0_15px_40px_rgba(0,0,0,0.2)] animate-fadeIn relative overflow-hidden group border-${story.color}-500`}
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-${story.color}-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-${story.color}-500/20 transition-all duration-700`}></div>
            <p className={`text-[10px] uppercase font-black tracking-[0.3em] text-${story.color}-400 mb-3`}>Legendary Story #{story.id}</p>
            <h3 className="text-2xl font-black mb-3 text-white">{story.title}</h3>
            <p className="opacity-80 italic text-base leading-relaxed text-pink-50">{story.summary}</p>
            <div className="mt-6 flex items-center justify-between">
               <span className={`px-3 py-1 bg-${story.color}-500/20 rounded-full text-[10px] font-black uppercase text-${story.color}-400 border border-${story.color}-500/30 shadow-[0_0_10px_rgba(0,0,0,0.3)]`}>{story.tag}</span>
               <i className="fas fa-chevron-right text-xs opacity-40"></i>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center opacity-40 text-xs italic mt-auto py-8">Abangan ang susunod na kabanata ng mga red flags...</p>

      {/* Story Detail Modal */}
      {selectedStory && (
        <div className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6 animate-fadeIn">
          <div className={`glass p-8 rounded-[3rem] border-t-8 border-${selectedStory.color}-500 shadow-2xl max-w-sm w-full relative overflow-y-auto max-h-[85vh]`}>
            <button 
              onClick={() => setSelectedStory(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center active:scale-90"
            >
              <i className="fas fa-times"></i>
            </button>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-pink-400 mb-2">Ang Buong Chika</p>
            <h2 className="text-3xl font-black text-white mb-6 leading-tight">{selectedStory.title}</h2>
            
            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 italic leading-relaxed text-lg text-pink-50">
                "{selectedStory.fullStory}"
              </div>
              
              <div className={`bg-${selectedStory.color}-500/10 p-5 rounded-2xl border border-${selectedStory.color}-500/30`}>
                <p className="text-[10px] font-black uppercase tracking-widest text-pink-300 mb-2">Tita Baby's Analysis:</p>
                <p className="text-sm font-bold text-white leading-relaxed">{selectedStory.level}</p>
                <p className="text-xs opacity-70 mt-2">Dapat sa mga ganyang tao, binubudburan ng asin at isinasaboy sa dagat!</p>
              </div>
            </div>
            
            <button 
              onClick={() => setSelectedStory(null)}
              className="mt-8 bg-gradient-to-r from-pink-600 to-purple-600 text-white w-full py-4 rounded-2xl font-black uppercase tracking-widest shadow-lg"
            >
              SALAMAT SA CHIKA!
            </button>
          </div>
        </div>
      )}
    </div>
  );

  const renderTekniks = () => (
    <div className="flex flex-col h-full p-6 bg-[#1a1a2e] overflow-y-auto">
      <div className="flex justify-between items-center mb-8 sticky top-0 bg-[#1a1a2e] py-6 z-10 border-b border-white/10">
        <h2 className="font-tita text-4xl text-yellow-300 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Red Flag Tekniks</h2>
        <button onClick={() => setStatus('START')} className="w-12 h-12 glass rounded-full flex items-center justify-center shadow-lg active:scale-90 border border-white/20"><i className="fas fa-times text-xl"></i></button>
      </div>
      
      <div className="space-y-6 pb-12">
        <p className="text-sm italic opacity-70 text-center mb-4 text-pink-100">"Master list ito ng mga galawan ni Kuya at ni Ghorl. Basahin mo para hindi ka na ma-scam next time!"</p>
        
        {RED_FLAG_TEKNIKS.map((teknik, idx) => (
          <div key={idx} className="glass p-6 rounded-[2rem] border-l-8 border-yellow-500 shadow-xl animate-fadeIn hover:bg-white/5 transition-all">
             <div className="flex items-center gap-4 mb-4">
                <span className="text-4xl">{teknik.icon}</span>
                <div>
                   <h3 className="text-xl font-black text-white">{teknik.name}</h3>
                   <p className="text-[10px] font-black uppercase text-yellow-400 tracking-widest">{teknik.alias}</p>
                </div>
             </div>
             <p className="text-sm leading-relaxed opacity-90 text-pink-50 font-medium">{teknik.description}</p>
          </div>
        ))}
      </div>
      <p className="text-center opacity-40 text-[10px] uppercase font-black tracking-widest mt-auto py-8">© Tita Baby Academy of Truth</p>
    </div>
  );

  const renderWisdom = () => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-black/80 backdrop-blur-3xl overflow-y-auto">
      <div className="mb-4 animate-bounce">
        {lastFeedback?.type === 'TAMA' ? <i className="fas fa-award text-9xl text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.8)]"></i> : <i className="fas fa-heart-broken text-9xl text-red-500 drop-shadow-[0_0_25px_rgba(239,68,68,0.8)]"></i>}
      </div>
      <div className={`text-4xl font-black mb-6 uppercase tracking-tighter ${lastFeedback?.type === 'TAMA' ? 'text-green-400' : 'text-red-500'}`}>{lastFeedback?.text}</div>
      <div className="glass p-8 rounded-3xl border-2 border-pink-400/50 mb-8 relative max-w-sm shadow-2xl">
        <i className="fas fa-quote-left absolute -top-4 -left-2 text-4xl text-pink-400 opacity-50"></i>
        <h3 className="font-tita text-2xl text-pink-300 mb-4 tracking-wide text-left">Tita Baby Says:</h3>
        <p className="text-xl italic leading-relaxed font-bold text-white drop-shadow-sm text-left">{currentScenario?.wisdom}</p>
      </div>
      <button onClick={() => { playSound('click'); setStatus('PLAYING'); loadNextScenario(); }} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white w-full py-5 rounded-full font-black text-xl shadow-2xl hover:scale-105 transition-transform active:scale-95 uppercase tracking-widest">
        Maghanap Pa ng red flag
      </button>
    </div>
  );

  const renderGameOver = () => (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-[#1a1a2e]/98 backdrop-blur-3xl">
      <div className="text-9xl mb-6 drop-shadow-2xl">👻</div>
      <h2 className="font-tita text-6xl mb-4 text-white">Na-Ghost Ka!</h2>
      <p className="text-lg mb-6 opacity-80 max-w-[280px]">Masyado kang nabulag sa red flags, ghorl. Magsimba ka nga muna!</p>
      <div className="glass w-full p-8 rounded-3xl mb-10 border-pink-500/40 shadow-inner bg-white/5">
        <p className="text-[10px] uppercase opacity-70 mb-2 font-black tracking-[0.2em]">Marites Score Mo</p>
        <p className="text-7xl font-black font-mono tracking-tighter text-pink-400 drop-shadow-lg">{score}</p>
        <p className="text-xs font-bold text-yellow-400 mt-2">Highest Streak: {streak}</p>
      </div>
      <div className="flex flex-col w-full gap-4">
        <button onClick={watchAdForHeart} className="bg-yellow-500 text-indigo-900 font-black px-12 py-5 rounded-full text-xl shadow-2xl w-full hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-3 border-2 border-yellow-200">
          <i className="fas fa-video"></i> {lives <= 0 ? "WATCH AD (SKIP WAIT)" : "PLAY AGAIN (+1 ❤️)"}
        </button>
        {lives <= 0 ? (
          <div className="bg-white/5 text-red-300 font-bold px-12 py-4 rounded-full text-lg shadow-xl w-full border border-red-500/30 flex flex-col items-center justify-center">
             <span className="text-xs uppercase opacity-70 mb-1">Cooldown Active</span>
             <span className="font-mono text-2xl">{cooldownTimeStr}</span>
          </div>
        ) : (
          <button onClick={() => { playSound('click'); setStatus('START'); }} className="bg-white/10 text-white font-bold px-12 py-4 rounded-full text-lg shadow-xl w-full hover:scale-105 transition-transform active:scale-95 border border-white/20">
            MAG-MOVE ON NA
          </button>
        )}
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-12">
        {BADGES.map(badge => (
          <div key={badge.id} className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-700 ${badges.includes(badge.id) ? 'bg-white/10 scale-110 shadow-lg border border-pink-500/30' : 'opacity-10 grayscale blur-[2px]'}`}>
            <span className="text-4xl mb-1">{badge.icon}</span>
            <span className="text-[9px] font-black uppercase tracking-tight">{badge.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="flex flex-col h-full bg-[#1a1a2e]/98 overflow-y-auto relative">
      <div className="flex justify-between items-center sticky top-0 bg-[#1a1a2e] z-[100] px-6 py-6 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        <h2 className="font-tita text-3xl text-pink-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">Certified Red Flag Fighter Ako!</h2>
        <button onClick={() => { playSound('click'); setStatus('START'); }} className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all active:scale-90 border border-white/20 shadow-lg shrink-0">
          <i className="fas fa-times text-xl"></i>
        </button>
      </div>
      
      <div className="p-6 space-y-10">
        <div className="glass rounded-[2.5rem] p-10 text-center border-pink-500/40 shadow-[0_0_40px_rgba(236,72,153,0.3)] relative group">
          <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-indigo-600/20 opacity-40 rounded-[2.5rem] pointer-events-none"></div>
          <div className="w-32 h-32 bg-gradient-to-tr from-pink-500 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center text-7xl shadow-[0_0_50px_rgba(236,72,153,0.7)] ring-4 ring-white/30 animate-pulse relative z-10 border-4 border-white/20">💅</div>
          <div className="relative z-20">
            <h3 className="text-4xl font-black mb-1 tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">Main Character</h3>
            {nickname && <p className="text-yellow-400 font-bold uppercase tracking-widest text-lg">"{nickname}"</p>}
            <p className="text-pink-300 font-black uppercase text-sm tracking-[0.2em] mt-3 drop-shadow-md">High Score: {highScore}</p>
            <div className="inline-block mt-4 px-6 py-2 bg-yellow-400/30 border-2 border-yellow-400/50 rounded-full shadow-lg">
              <p className="text-yellow-400 font-black uppercase text-xs tracking-widest">Current Streak: {streak} 🔥</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 ml-2 group">
             <div className="w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center shrink-0 border-2 border-yellow-200 shadow-[0_10px_30px_rgba(250,204,21,0.5)] group-hover:scale-110 transition-transform">
                <i className="fas fa-star text-indigo-900 text-3xl"></i>
             </div>
             <h4 className="text-[16px] font-black uppercase tracking-[0.3em] text-pink-100 drop-shadow-md">Milestones Earned</h4>
          </div>

          <div className="grid grid-cols-2 gap-4">
             {earnedStreakBadges.length === 0 && <p className="col-span-2 opacity-50 italic text-sm py-12 text-white/70 glass rounded-[2rem] text-center border-dashed border-2 border-white/10">Wala pa tayong streak badges, ineng. Galingan mo!</p>}
             {earnedStreakBadges.slice(-12).reverse().map(s => {
                const milestone = STREAK_BADGES.find(sb => sb.streak === s);
                return (
                  <div key={s} className="glass p-6 rounded-[2.5rem] flex flex-col items-center border border-pink-500/40 shadow-[0_10px_20px_rgba(0,0,0,0.2)] animate-fadeIn group hover:bg-white/10 transition-colors">
                    <span className="text-6xl mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] group-hover:scale-125 transition-transform duration-500">{milestone?.icon}</span>
                    <p className="text-[11px] font-black uppercase text-center text-white leading-tight group-hover:text-pink-300 transition-colors">{milestone?.name}</p>
                    <p className="text-[9px] opacity-40 mt-2 font-black tracking-widest text-pink-200">STREAK: {s}</p>
                  </div>
                );
             })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 ml-2 group">
             <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shrink-0 border-2 border-pink-200 shadow-[0_10px_30px_rgba(236,72,153,0.5)] group-hover:scale-110 transition-transform">
                <i className="fas fa-trophy text-white text-3xl"></i>
             </div>
             <h4 className="text-[16px] font-black uppercase tracking-[0.3em] text-pink-100 drop-shadow-md">Achievements, Ghorl?</h4>
          </div>

          <div className="space-y-6 pb-20">
            {BADGES.map(badge => (
              <div key={badge.id} className={`glass p-8 rounded-[3rem] flex items-center gap-6 transition-all duration-700 border-l-[12px] ${badges.includes(badge.id) ? 'border-pink-500 bg-white/20 shadow-[0_20px_40px_rgba(236,72,153,0.3)] translate-x-2' : 'opacity-20 grayscale border-transparent scale-95'}`}>
                <div className={`text-7xl drop-shadow-2xl ${badges.includes(badge.id) ? 'animate-bounce' : ''}`}>{badge.icon}</div>
                <div className="text-left flex-1">
                  <p className="font-black text-2xl leading-tight uppercase tracking-tight text-white drop-shadow-sm">{badge.name}</p>
                  <p className="text-sm font-medium opacity-80 mt-2 leading-relaxed text-pink-50">{badge.description}</p>
                  <div className="mt-5 w-full bg-black/40 h-4 rounded-full overflow-hidden p-[2px] border border-white/20 shadow-inner">
                    <div className="bg-gradient-to-r from-pink-500 to-indigo-500 h-full transition-all duration-1000 shadow-[0_0_20px_rgba(236,72,153,0.8)] rounded-full" style={{ width: `${Math.min((score / badge.threshold) * 100, 100)}%` }}></div>
                  </div>
                </div>
                {badges.includes(badge.id) && <div className="text-pink-400 text-4xl animate-pulse"><i className="fas fa-check-circle"></i></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-full w-full select-none overflow-hidden relative" onClick={() => initAudio()}>
      {status === 'START' && renderStartScreen()}
      {status === 'PLAYING' && renderGame()}
      {status === 'WISDOM' && renderWisdom()}
      {status === 'GAME_OVER' && renderGameOver()}
      {status === 'PROFILE' && renderProfile()}
      {status === 'DIARY' && renderDiary()}
      {status === 'STORIES' && renderStories()}
      {status === 'TEKNIKS' && renderTekniks()}
      {status === 'STORE' && renderStore()}
      {status === 'LEADERBOARD' && renderLeaderboard()}

      {status === 'START' && lives > 0 && (
        <button onClick={() => { playSound('click'); setStatus('PROFILE'); }} className="absolute top-6 right-6 w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all shadow-[0_0_20px_rgba(0,0,0,0.3)] ring-2 ring-white/20 group active:scale-90 z-50 border border-white/30">
          <i className="fas fa-gem text-2xl text-yellow-400 group-hover:rotate-12 transition-transform drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]"></i>
        </button>
      )}

      {isRedFlagInfoOpen && (
        <div className="absolute inset-0 z-[300] bg-black/95 backdrop-blur-3xl flex items-center justify-center p-6 animate-fadeIn">
          <div className="glass p-10 rounded-[3rem] border-4 border-red-500 shadow-[0_0_50px_rgba(239,68,68,0.4)] text-center relative max-w-sm">
            <button 
              onClick={() => { playSound('click'); setIsRedFlagInfoOpen(false); }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full text-indigo-900 text-2xl flex items-center justify-center shadow-xl active:scale-90"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="text-6xl mb-6">🚩</div>
            <h2 className="text-3xl font-black text-red-500 mb-6 uppercase tracking-tighter">Ano ba ang Red Flag?</h2>
            
            <div className="space-y-6 text-left">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
                <p className="text-[10px] uppercase font-black tracking-widest text-pink-300 mb-1">English Context</p>
                <p className="text-sm font-medium leading-relaxed">A warning sign or indicator of a potential problem or danger in a relationship, behavior, or situation. It's a signal to stop and evaluate before proceeding.</p>
              </div>
              
              <div className="bg-red-500/10 p-4 rounded-2xl border border-red-500/20">
                <p className="text-[10px] uppercase font-black tracking-widest text-red-400 mb-1">Filipino Context</p>
                <p className="text-sm font-medium leading-relaxed italic">Isang "warning sign" na ang isang tao ay maaaring maging toxic, red-tide, o sakit sa bangs. Ito ang senyales ni Lord na "Teh, takbo na!" bago ka maging bida sa sarili mong trahedya.</p>
              </div>
            </div>
            
            <button 
              onClick={() => { playSound('click'); setIsRedFlagInfoOpen(false); }}
              className="mt-8 bg-red-500 text-white w-full py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg"
            >
              GUMISING KA NA GHORL!
            </button>
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="absolute inset-0 z-[200] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center p-8 animate-fadeIn overflow-y-auto">
          <button 
            onClick={() => setIsMenuOpen(false)} 
            className="absolute top-8 right-8 w-14 h-14 flex items-center justify-center glass rounded-full text-3xl hover:bg-white/10 active:scale-90 transition-all border border-white/20"
          >
            <i className="fas fa-times"></i>
          </button>
          
          <div className="text-6xl mb-6 drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]">💅</div>
          <h2 className="font-tita text-5xl text-pink-300 mb-12 drop-shadow-lg text-center">Tita Menu</h2>
          
          <div className="w-full space-y-4 pb-12">
            <button 
              onClick={() => { playSound('click'); setIsMenuOpen(false); setStatus('DIARY'); }} 
              className="w-full glass p-6 rounded-[2rem] flex items-center gap-6 text-xl font-black border-l-8 border-pink-500 hover:bg-white/10 transition-all shadow-[0_10px_30px_rgba(236,72,153,0.3)] group"
            >
              <div className="w-12 h-12 bg-pink-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <i className="fas fa-book-open text-pink-400 text-2xl"></i>
              </div>
              <div className="text-left">
                <p className="text-white">Red Flag Diary</p>
                <p className="text-[10px] uppercase tracking-widest text-pink-300/60 font-black">Secrets Only, Ghorl</p>
              </div>
            </button>

            <button 
              disabled={!isStoriesUnlocked}
              onClick={() => { if (isStoriesUnlocked) { playSound('click'); setIsMenuOpen(false); setStatus('STORIES'); } }} 
              className={`w-full glass p-6 rounded-[2rem] flex items-center gap-6 text-xl font-black border-l-8 ${isStoriesUnlocked ? 'border-purple-500 hover:bg-white/10' : 'border-gray-500 opacity-60'} transition-all shadow-[0_10px_30px_rgba(139,92,246,0.3)] group relative`}
            >
              <div className={`w-12 h-12 ${isStoriesUnlocked ? 'bg-purple-500/20' : 'bg-gray-500/20'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <i className={`fas ${isStoriesUnlocked ? 'fa-bullhorn text-purple-400' : 'fa-lock text-gray-400'} text-2xl`}></i>
              </div>
              <div className="text-left flex-1">
                <p className="text-white">Red Flag Stories</p>
                <p className="text-[9px] uppercase tracking-widest text-purple-300 font-black">
                  {isStoriesUnlocked ? 'Chika Chronicles' : 'Lock muna ghurl! 10 consecutive streak to unlock!'}
                </p>
              </div>
            </button>

            <button 
              disabled={!isTekniksUnlocked}
              onClick={() => { if (isTekniksUnlocked) { playSound('click'); setIsMenuOpen(false); setStatus('TEKNIKS'); } }} 
              className={`w-full glass p-6 rounded-[2rem] flex items-center gap-6 text-xl font-black border-l-8 ${isTekniksUnlocked ? 'border-yellow-500 hover:bg-white/10' : 'border-gray-500 opacity-60'} transition-all shadow-[0_10px_30px_rgba(0,0,0,0.3)] group relative`}
            >
              <div className={`w-12 h-12 ${isTekniksUnlocked ? 'bg-yellow-500/20' : 'bg-gray-500/20'} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <i className={`fas ${isTekniksUnlocked ? 'fa-scroll text-yellow-400' : 'fa-lock text-gray-400'} text-2xl`}></i>
              </div>
              <div className="text-left flex-1">
                <p className="text-white">Red Flag Tekniks</p>
                <p className="text-[9px] uppercase tracking-widest text-yellow-400 font-black">
                   {isTekniksUnlocked ? 'Master List ni Tita' : 'Lock muna ghorl. 20 consecutive streak to unlock!'}
                </p>
              </div>
            </button>

            <button 
              onClick={() => { playSound('click'); setIsMenuOpen(false); setStatus('STORE'); }} 
              className="w-full glass p-6 rounded-[2rem] flex items-center gap-6 text-xl font-black border-l-8 border-yellow-500 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 bg-yellow-500/20 rounded-2xl flex items-center justify-center">
                <i className="fas fa-store text-2xl text-yellow-300"></i>
              </div>
              <div className="text-left">
                <p className="text-white">Tita's Tindahan</p>
                <p className="text-[10px] uppercase tracking-widest text-yellow-300/60 font-black">Buy Nickname</p>
              </div>
            </button>
            
            {nickname && (
              <button 
                onClick={() => { playSound('click'); setIsMenuOpen(false); setStatus('LEADERBOARD'); }} 
                className="w-full glass p-6 rounded-[2rem] flex items-center gap-6 text-xl font-black border-l-8 border-green-500 hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-2xl flex items-center justify-center">
                  <i className="fas fa-list-ol text-2xl text-green-300"></i>
                </div>
                <div className="text-left">
                  <p className="text-white">Leaderboard</p>
                  <p className="text-[10px] uppercase tracking-widest text-green-300/60 font-black">Top Marites</p>
                </div>
              </button>
            )}

            <button 
              onClick={() => { playSound('click'); setIsMenuOpen(false); setStatus('START'); }} 
              className="w-full glass p-6 rounded-[2rem] flex items-center gap-6 text-xl font-bold border-l-8 border-white/50 hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <i className="fas fa-home text-2xl"></i>
              </div>
              <p>Back to Main</p>
            </button>
          </div>
        </div>
      )}

      {activeMilestone && (
        <div className="absolute inset-0 z-[300] flex items-center justify-center p-6 bg-black/95 backdrop-blur-2xl">
          <div className={`glass p-10 rounded-[3rem] text-center border-4 shadow-[0_0_60px_rgba(236,72,153,0.5)] max-w-sm relative overflow-hidden ${activeMilestone.isGrand ? 'border-yellow-400' : 'border-pink-500'}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
            <div className={`text-9xl mb-8 transform transition-transform duration-500 ${activeMilestone.isGrand ? 'scale-125 rotate-12 animate-pulse' : 'hover:scale-110'}`}>{activeMilestone.icon}</div>
            <h2 className={`text-4xl font-black mb-3 uppercase italic tracking-tighter drop-shadow-md ${activeMilestone.isGrand ? 'text-yellow-400' : 'text-pink-400'}`}>NEW BADGE: {activeMilestone.name}</h2>
            <div className="w-24 h-1.5 bg-white/30 mx-auto mb-8 rounded-full"></div>
            <p className="text-2xl font-bold italic leading-relaxed text-white drop-shadow-md mb-10">"{activeMilestone.message}"</p>
            <button 
              onClick={() => setActiveMilestone(null)} 
              className="bg-white text-indigo-900 font-black px-14 py-5 rounded-full text-xl shadow-[0_15px_40px_rgba(255,255,255,0.3)] hover:scale-110 active:scale-95 transition-all uppercase tracking-widest"
            >
              SALAMAT TITA BABY!
            </button>
          </div>
        </div>
      )}

      {isAdPlaying && (
        <div className="absolute inset-0 z-[400] bg-black flex flex-col items-center justify-center text-center p-8">
          <div className="w-full max-w-xs aspect-video bg-gray-900 rounded-3xl mb-10 flex items-center justify-center border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-4 right-4 bg-black/70 px-3 py-1.5 rounded-lg text-[10px] font-black tracking-widest text-white border border-white/20">ADVERTISEMENT</div>
            <i className="fas fa-play text-6xl text-white/10 animate-pulse"></i>
            <div className="absolute bottom-0 left-0 h-2 bg-yellow-500 animate-[ad-progress_2.5s_linear_forwards] shadow-[0_0_10px_rgba(234,179,8,1)]"></div>
          </div>
          <h3 className="text-3xl font-black mb-4 animate-pulse text-white drop-shadow-md">Nanonood ka ng Ad...</h3>
          <p className="text-base opacity-70 text-pink-50 font-medium">Konting tiis lang, ghorl! Bonus heart is coming!</p>
          <style>{`@keyframes ad-progress { from { width: 0%; } to { width: 100%; } }`}</style>
        </div>
      )}
    </div>
  );
};

export default App;