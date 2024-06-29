import { themes } from 'prism-react-renderer'
import React from 'react'

export interface ThemeProps {
    value: string
    onValueChange: (value: string) => void
}

export default function Themes({
    value, onValueChange
} : ThemeProps) {
  return (
    <select
        className="bg-gray-700 text-white p-2 rounded-t-md mx-2 capitalize"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      >
        {Object.keys(themes).map((theme) => (
          <option key={theme} value={theme} >
            {theme}
          </option>
        ))}
      </select>
  )
}
