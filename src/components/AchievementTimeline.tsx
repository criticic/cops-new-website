'use client'

import { useRef } from 'react'
import { GiAchievement } from 'react-icons/gi'
import { achievements, Achievement } from '@/app/config/achievements'

type YearData = {
  year: string
  achievements: Achievement[]
}

const colorMap: { [key: number]: string } = {
  1: 'text-yellow-400', // Gold
  2: 'text-gray-300', // Silver
  3: 'text-orange-400', // Bronze
}

function yearwiseAchievements(achievements: Achievement[]): YearData[] {
  const years = [...new Set(achievements.map(a => a.year))].sort((a, b) => b - a)
  return years.map(year => ({
    year: year.toString(),
    achievements: achievements.filter(a => a.year === year),
  }))
}

export default function AchievementsTimeline() {
  const groupedAchievements = yearwiseAchievements(achievements)
  const containerRef = useRef<HTMLDivElement>(null)
  const yearRefs = useRef<(HTMLDivElement | null)[]>([])
  const scrollToYear = (index: number) => {
    yearRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="relative">
      <div className="flex">
        {/* Year Nav*/}
        <nav className="sticky top-32 h-fit self-start ml-4 my-12 md:ml-10 z-20">
          <div className="flex flex-col gap-4 rounded-lg bg-white/10 p-4 backdrop-blur-xl">
            {groupedAchievements.map((yearData, index) => (
              <button
                key={yearData.year}
                onClick={() => scrollToYear(index)}
                className="group flex items-center rounded-md px-3 py-2 transition-all duration-300 hover:bg-white/10"
              >
                <span className="text-white transition-all duration-300">
                  {yearData.year}
                </span>
              </button>
            ))}
          </div>
        </nav>

        {/* Achievements Content */}
        <div
          ref={containerRef}
          className="flex-1 px-4 mx-8"
        >
          {groupedAchievements.map((yearData, index) => (
            <div
              key={yearData.year}
              ref={(el) => {
                yearRefs.current[index] = el;
              }}
              className="flex min-h-[50vh] flex-col justify-center py-10 scroll-mt-16"
            >
              <div className="mb-8">
                <h3 className="mb-4 bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                  {yearData.year} Achievements 🏆
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {yearData.achievements.map((achievement, achievementIndex) => (
                  <div
                    key={`${achievement.title}-${achievementIndex}`}
                    className="rounded-lg border border-white/20 bg-white/10 p-6 text-center shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-white/30 hover:bg-white/15 hover:shadow-lg"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                      <GiAchievement
                        className={`h-10 w-10 ${
                          achievement.position && colorMap[achievement.position]
                            ? colorMap[achievement.position]
                            : 'text-neutral-300'
                        } transition-all duration-300 hover:brightness-125`}
                      />
                    </div>
                    <h4 className="mb-2 text-xl font-semibold text-white">
                      {achievement.title}
                    </h4>
                    <p className="mb-2 text-sm font-medium text-yellow-400">
                      {achievement.level}
                    </p>
                    <p className="text-sm text-gray-300">{achievement.description}</p>
                    {achievement.category && (
                      <span className="mt-3 inline-block rounded-full bg-blue-600/20 px-3 py-1 text-xs font-medium text-blue-300">
                        {achievement.category}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}