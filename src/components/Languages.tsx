import React from 'react'
import { languages } from '../Editor'

export interface LanguageProps {
    value: string
    onValueChange: (value: string) => void
}

export default function Languages({
    value, onValueChange
} : LanguageProps) {
  return (
    <select
        className="bg-gray-700 text-white p-2 rounded-t-md"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>
  )
}
