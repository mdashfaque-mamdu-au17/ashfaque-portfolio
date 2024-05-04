'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // until the UI is mounted, display a dummy icon
  if (!mounted) {
    return <div>dummy</div>;
  }

  return (
    <button onClick={toggleTheme}>{theme === 'dark' ? 'Sun' : 'Moon'}</button>
  );
}
