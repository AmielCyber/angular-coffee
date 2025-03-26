import { Component, ChangeDetectionStrategy } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

import {CoffeeIconComponent} from '../../icons/coffee-icon/coffee-icon.component';
import {LINK_TOKENS} from '../../routes/router-tokens.model';

@Component({
  selector: 'app-home-link',
  imports: [
    CoffeeIconComponent,
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './home-link.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeLinkComponent
{
  protected readonly HOME_ROUTE = LINK_TOKENS.HOME;
}
