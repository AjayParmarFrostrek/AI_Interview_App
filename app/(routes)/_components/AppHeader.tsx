import { UserButton } from '@clerk/nextjs'
import React from 'react'

const MenuOptions = [
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Upgrade', path: '/upgrade' },
  { name: 'How it works', path: '/how-it-works' },
]

function AppHeader() {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" />
        <h1 className="text-base font-bold md:text-2xl">AI Mock Interview</h1>
      </div>

      <ul className="flex gap-5">
        {MenuOptions.map((option) => (
          <li
            key={option.path}
            className="text-lg hover:scale-105 transition-all cursor-pointer"
          >
            {option.name}
          </li>
        ))}
      </ul>

      <UserButton />
    </nav>
  )
}

export default AppHeader
