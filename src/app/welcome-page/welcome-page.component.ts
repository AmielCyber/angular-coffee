import {Component, inject} from '@angular/core';

import {APP_SETTINGS, appSettings, AppSettings} from '../app.settings';

@Component({
  selector: 'app-welcome-page',
  imports: [],
  templateUrl: './welcome-page.component.html',
})
export class WelcomePageComponent {
  // TODO: add user service
  private appSettings: AppSettings;
  title: string;

  constructor() {
    this.appSettings = inject(APP_SETTINGS);
    this.title = this.appSettings.title;
  }
}
export const WelcomePageTitle = appSettings.title;
