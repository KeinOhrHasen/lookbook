'use client';

import { useState } from 'react';

export default function Settings() {
  const [theme, setTheme] = useState('light');

  const themes = ['light', 'dark', 'system'];

  function handleThemeChange(e): void {
    setTheme(e.target.value);
  }
  return (
    <div className="px-24 pt-24 pb-40 bg-slate-200 h-full">
      <div className="pt-10 bg-slate-200">Select app theme:</div>
      <select name="theme" id="theme" value={theme} onChange={handleThemeChange}>
        {themes.map((themeItem) => (
          <option key={themeItem} value={themeItem}>
            {themeItem}
          </option>
        ))}
      </select>
    </div>
  );
}
