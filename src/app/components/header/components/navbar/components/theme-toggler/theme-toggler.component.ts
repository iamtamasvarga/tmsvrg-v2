import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService, Theme } from '@services/theme-switcher.service';

@Component({
  selector: 'app-theme-toggler',
  templateUrl: './theme-toggler.component.html',
  styleUrls: ['./theme-toggler.component.scss']
})
export class ThemeTogglerComponent implements OnInit {
  darkMode!: boolean;

  constructor(private themeSwitcher: ThemeSwitcherService) { }

  ngOnInit() {
    this.darkMode = this.themeSwitcher.isDarkMode();
  }

  checkBoxChange($event: any): void {
    const checked: boolean = $event.target.checked;

    this.themeSwitcher.toggleTheme(checked);
  }
}
