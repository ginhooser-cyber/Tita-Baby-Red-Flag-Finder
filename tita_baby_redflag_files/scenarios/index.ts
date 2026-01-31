// Scenarios Index - Combines all scenario files with random spawn mechanics
import { GameMode, Scenario } from '../types';
import { TEENS_SCENARIOS } from './teensScenarios';
import { YOUNG_ADULT_SCENARIOS } from './youngAdultScenarios';
import { ADULT_SCENARIOS } from './adultScenarios';
import { GENERAL_POOL_SCENARIOS } from './generalPoolScenarios';

// Fisher-Yates shuffle algorithm for true randomization
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Track consumed scenarios per session
const consumedScenarios: Map<GameMode, Set<number>> = new Map([
  [GameMode.TEENS, new Set()],
  [GameMode.YOUNG_ADULT, new Set()],
  [GameMode.ADULT, new Set()]
]);

// Get primary scenarios by mode
function getPrimaryScenarios(mode: GameMode): Scenario[] {
  switch (mode) {
    case GameMode.TEENS:
      return TEENS_SCENARIOS;
    case GameMode.YOUNG_ADULT:
      return YOUNG_ADULT_SCENARIOS;
    case GameMode.ADULT:
      return ADULT_SCENARIOS;
    default:
      return [...TEENS_SCENARIOS, ...YOUNG_ADULT_SCENARIOS, ...ADULT_SCENARIOS];
  }
}

// Randomly spawn scenarios - mixes red and green flags unpredictably
// If primary pool (200) is consumed, falls back to general pool (500)
export function getRandomizedScenarios(mode: GameMode, count?: number): Scenario[] {
  const primaryScenarios = shuffleArray(getPrimaryScenarios(mode));
  
  // If count requested is less than primary, just return from primary
  if (count && count <= primaryScenarios.length) {
    return primaryScenarios.slice(0, count);
  }
  
  // Combine with general pool for extended play
  const generalPool = shuffleArray(GENERAL_POOL_SCENARIOS);
  const combined = [...primaryScenarios, ...generalPool];
  
  return count ? combined.slice(0, count) : shuffleArray(combined);
}

// Get a single random scenario for immediate use
// Uses tracking to avoid repeats within session
export function getRandomScenario(mode: GameMode): Scenario {
  const primaryScenarios = getPrimaryScenarios(mode);
  const consumed = consumedScenarios.get(mode) || new Set();
  
  // Find unconsumed scenarios from primary pool
  const availablePrimary = primaryScenarios.filter((_, idx) => !consumed.has(idx));
  
  if (availablePrimary.length > 0) {
    // Still have primary scenarios available
    const randomIdx = Math.floor(Math.random() * availablePrimary.length);
    const originalIdx = primaryScenarios.indexOf(availablePrimary[randomIdx]);
    consumed.add(originalIdx);
    consumedScenarios.set(mode, consumed);
    return availablePrimary[randomIdx];
  }
  
  // Primary pool exhausted, use general pool
  const shuffledGeneral = shuffleArray(GENERAL_POOL_SCENARIOS);
  return shuffledGeneral[0];
}

// Reset consumed scenarios tracking (call when starting new game)
export function resetScenarioTracking(mode?: GameMode): void {
  if (mode) {
    consumedScenarios.set(mode, new Set());
  } else {
    consumedScenarios.set(GameMode.TEENS, new Set());
    consumedScenarios.set(GameMode.YOUNG_ADULT, new Set());
    consumedScenarios.set(GameMode.ADULT, new Set());
  }
}

// Get scenarios with fallback to general pool when primary exhausted
export function getScenariosWithFallback(mode: GameMode, requestedCount: number): Scenario[] {
  const primary = shuffleArray(getPrimaryScenarios(mode));
  
  if (requestedCount <= primary.length) {
    return primary.slice(0, requestedCount);
  }
  
  // Need more than primary has, add from general pool
  const remaining = requestedCount - primary.length;
  const fromGeneral = shuffleArray(GENERAL_POOL_SCENARIOS).slice(0, remaining);
  
  return shuffleArray([...primary, ...fromGeneral]);
}

// Get difficulty-weighted scenarios (more red flags = harder)
export function getDifficultyWeightedScenarios(mode: GameMode, difficulty: 'easy' | 'medium' | 'hard' | 'extreme'): Scenario[] {
  // Combine primary with general pool for larger variety
  const primary = getPrimaryScenarios(mode);
  const allScenarios = shuffleArray([...primary, ...GENERAL_POOL_SCENARIOS]);
  
  const redFlags = allScenarios.filter(s => s.isRedFlag);
  const greenFlags = allScenarios.filter(s => !s.isRedFlag);
  
  let redRatio: number;
  switch (difficulty) {
    case 'easy':
      redRatio = 0.5; // 50% red flags
      break;
    case 'medium':
      redRatio = 0.6; // 60% red flags
      break;
    case 'hard':
      redRatio = 0.7; // 70% red flags
      break;
    case 'extreme':
      redRatio = 0.8; // 80% red flags - super hard!
      break;
  }
  
  const totalCount = Math.min(allScenarios.length, 300); // Cap at 300 for performance
  const redCount = Math.floor(totalCount * redRatio);
  const greenCount = totalCount - redCount;
  
  const selectedRed = shuffleArray(redFlags).slice(0, redCount);
  const selectedGreen = shuffleArray(greenFlags).slice(0, greenCount);
  
  return shuffleArray([...selectedRed, ...selectedGreen]);
}

// Get endless mode scenarios - combines all pools for maximum variety
export function getEndlessModeScenarios(): Scenario[] {
  return shuffleArray([
    ...TEENS_SCENARIOS,
    ...YOUNG_ADULT_SCENARIOS,
    ...ADULT_SCENARIOS,
    ...GENERAL_POOL_SCENARIOS
  ]);
}

// Export all scenarios for backward compatibility
export const ALL_TEENS_SCENARIOS = TEENS_SCENARIOS;
export const ALL_YOUNG_ADULT_SCENARIOS = YOUNG_ADULT_SCENARIOS;
export const ALL_ADULT_SCENARIOS = ADULT_SCENARIOS;
export const ALL_GENERAL_POOL_SCENARIOS = GENERAL_POOL_SCENARIOS;

// Combined export for total scenario count
export const TOTAL_SCENARIO_COUNT = {
  teens: TEENS_SCENARIOS.length,
  youngAdult: YOUNG_ADULT_SCENARIOS.length,
  adult: ADULT_SCENARIOS.length,
  generalPool: GENERAL_POOL_SCENARIOS.length,
  total: TEENS_SCENARIOS.length + YOUNG_ADULT_SCENARIOS.length + ADULT_SCENARIOS.length + GENERAL_POOL_SCENARIOS.length
};

export { TEENS_SCENARIOS, YOUNG_ADULT_SCENARIOS, ADULT_SCENARIOS, GENERAL_POOL_SCENARIOS };