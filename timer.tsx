'use client'

import { useState, useEffect } from 'react'
import { Clock, Play, Pause, RotateCcw } from 'lucide-react'

interface TimerProps {
  initialMinutes?: number
  initialSeconds?: number
  onTimeUp?: () => void
}

export function Timer({ initialMinutes = 5, initialSeconds = 0, onTimeUp }: TimerProps) {
  const [minutes, setMinutes] = useState(initialMinutes)
  const [seconds, setSeconds] = useState(initialSeconds)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            setIsActive(false)
            onTimeUp?.()
            return
          }
          setMinutes(minutes - 1)
          setSeconds(59)
        } else {
          setSeconds(seconds - 1)
        }
      }, 1000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, minutes, seconds, onTimeUp])

  const toggleTimer = () => setIsActive(!isActive)

  const resetTimer = () => {
    setIsActive(false)
    setMinutes(initialMinutes)
    setSeconds(initialSeconds)
  }

  const isWarning = minutes === 0 && seconds <= 30
  const isTimeUp = minutes === 0 && seconds === 0

  return (
    <div className="flex flex-col items-center gap-4 p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/50 rounded-2xl">
      <div className="flex items-center gap-2">
        <Clock className="w-5 h-5 text-purple-400" />
        <span className="text-sm font-semibold text-purple-300">TIME REMAINING</span>
      </div>

      <div className={`text-5xl font-black font-mono ${
        isTimeUp ? 'text-red-500 animate-pulse' : 
        isWarning ? 'text-orange-400' : 
        'text-purple-300'
      }`}>
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>

      <div className="w-full bg-purple-900/50 rounded-full h-2 overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ${
            isTimeUp ? 'bg-red-500' : 
            isWarning ? 'bg-orange-400' : 
            'bg-gradient-to-r from-purple-500 to-pink-500'
          }`}
          style={{ width: `${100 - ((minutes * 60 + seconds) / ((initialMinutes * 60 + initialSeconds) || 1) * 100)}%` }}
        />
      </div>

      <div className="flex gap-3 w-full">
        <button
          onClick={toggleTimer}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition-all active:scale-95"
        >
          {isActive ? (
            <>
              <Pause className="w-4 h-4" />
              Pause
            </>
          ) : (
            <>
              <Play className="w-4 h-4" />
              Start
            </>
          )}
        </button>

        <button
          onClick={resetTimer}
          className="flex items-center justify-center py-2 px-4 rounded-lg bg-slate-700 hover:bg-slate-800 text-white transition-all active:scale-95"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
