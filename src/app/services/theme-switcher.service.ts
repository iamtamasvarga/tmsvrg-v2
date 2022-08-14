import { Injectable } from '@angular/core';

const THEME_KEY = 'theme';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  constructor() {
    this.initializeTheme();
  }

  private initializeTheme(): void {
    let theme: string | null = localStorage.getItem(THEME_KEY);

    if (theme === null)
      theme = this.isDarkModeEnabled() ? Theme.Dark : Theme.Light;
    else theme === Theme.Light.toString() ? Theme.Light : Theme.Dark;

    this.setTheme(theme);
  }

  setTheme(theme: string) {
    localStorage.setItem(THEME_KEY, theme);
    if(document.documentElement.classList.contains('light'))
    {
      document.documentElement.classList.remove('light');
    }
    else if(document.documentElement.classList.contains('dark'))
    {
      document.documentElement.classList.remove('dark');
    }

    document.documentElement.classList.add(theme);
  }

  toggleTheme(darkMode: boolean): void {
    this.setTheme(darkMode ? Theme.Dark : Theme.Light);
  }

  isDarkMode(): boolean {
    const theme: string | null = localStorage.getItem(THEME_KEY);

    if (theme === null) return this.isDarkModeEnabled();

    return theme === Theme.Dark.toString();
  }

  private isDarkModeEnabled(): boolean {
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }
}
