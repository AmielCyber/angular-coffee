import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

import {ROUTER_TOKENS} from '../routes/router-tokens.model';

@Component({
  selector: 'app-not-found-page',
  imports: [
    RouterLink
  ],
  templateUrl: './not-found-page.component.html'
})
export class NotFoundPageComponent {
  readonly homeAddress = `/${ROUTER_TOKENS.HOME}`;
}
