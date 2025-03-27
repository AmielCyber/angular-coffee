import {ChangeDetectionStrategy, Component, inject} from '@angular/core';

import {APP_SETTINGS, AppSettings} from '../app.settings';
import {LINK_TOKENS} from '../routes/router-tokens.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  imports: [
    RouterLink
  ],
  templateUrl: './welcome-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomePageComponent {
  // TODO: add user service
  protected readonly MENU_LINK = LINK_TOKENS.MENU;
  private appSettings: AppSettings;
  title: string;

  constructor() {
    this.appSettings = inject(APP_SETTINGS);
    this.title = this.appSettings.title;
  }
}
