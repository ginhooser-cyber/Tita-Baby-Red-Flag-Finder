
export enum GameMode {
  TEENS = 'TEENS',
  YOUNG_ADULT = 'YOUNG_ADULT',
  ADULT = 'ADULT'
}

export interface Scenario {
  text: string;
  isRedFlag: boolean;
  wisdom: string;
  category: GameMode;
}

export interface Badge {
  id: string;
  name: string;
  threshold: number;
  icon: string;
  description: string;
}

export interface StreakBadge {
  streak: number;
  name: string;
  icon: string;
  message: string;
  isGrand?: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  streak: number;
  isUser?: boolean;
}

export type GameStatus = 'START' | 'PLAYING' | 'WISDOM' | 'GAME_OVER' | 'PROFILE' | 'DIARY' | 'STORIES' | 'TEKNIKS' | 'STORE' | 'LEADERBOARD';
