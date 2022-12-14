import { Component } from '@angular/core';
import { ThemeSwitcherService } from '@services/theme-switcher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tmsvrg-v2';

  constructor(private themeSwitcher: ThemeSwitcherService)
  {
  }

}
