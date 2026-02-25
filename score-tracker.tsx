'use client'

import { Trophy, Star, Flame, Award } from 'lucide-react'

interface ScoreTrackerProps {
  currentScore: number
  totalQuestions: number
  accuracy: number
  streak: number
  level: number
  xp: number
  badge?: string
}

export function ScoreTracker({
  currentScore,
  totalQuestions,
  accuracy,
  streak,
  level,
  xp,
  badge
}: ScoreTrackerProps) {
  const percentage = ((currentScore / totalQuestions) * 100).toFixed(1)

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 mb-6">
      {/* Main Score */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-purple-800/40 border border-purple-500/50">
        <div className="text-xs font-semibold text-purple-300 mb-1">SCORE</div>
        <div className="text-2xl font-black text-purple-300">
          {currentScore}/{totalQuestions}
        </div>
        <div className="text-xs text-purple-400 mt-1">{percentage}%</div>
      </div>

      {/* Accuracy */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-pink-900/40 to-pink-800/40 border border-pink-500/50">
        <div className="text-xs font-semibold text-pink-300 mb-1 flex items-center gap-1">
          <Star className="w-3 h-3" /> ACCURACY
        </div>
        <div className="text-2xl font-black text-pink-300">
          {accuracy}%
        </div>
        <div className="text-xs text-pink-400 mt-1">Perfect!</div>
      </div>

      {/* Streak */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-orange-900/40 to-orange-800/40 border border-orange-500/50">
        <div className="text-xs font-semibold text-orange-300 mb-1 flex items-center gap-1">
          <Flame className="w-3 h-3" /> STREAK
        </div>
        <div className="text-2xl font-black text-orange-300">
          {streak}
        </div>
        <div className="text-xs text-orange-400 mt-1">Correct in a row</div>
      </div>

      {/* Level & XP */}
      <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-900/40 to-cyan-800/40 border border-cyan-500/50">
        <div className="text-xs font-semibold text-cyan-300 mb-1 flex items-center gap-1">
          <Award className="w-3 h-3" /> LEVEL
        </div>
        <div className="text-2xl font-black text-cyan-300">
          {level}
        </div>
        <div className="text-xs text-cyan-400 mt-1">{xp} XP Earned</div>
      </div>

      {/* Badge Section */}
      {badge && (
        <div className="col-span-2 md:col-span-4 p-4 rounded-xl bg-gradient-to-r from-yellow-900/40 to-amber-900/40 border border-yellow-500/50 flex items-center justify-center gap-3">
          <Trophy className="w-6 h-6 text-yellow-400" />
          <div>
            <div className="text-xs font-semibold text-yellow-300">NEW BADGE UNLOCKED</div>
            <div className="text-lg font-black text-yellow-300">{badge}</div>
          </div>
        </div>
      )}
    </div>
  )
}
