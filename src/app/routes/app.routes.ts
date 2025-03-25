import { Routes } from '@angular/router';

import {WelcomePageComponent} from '../welcome-page/welcome-page.component';
import {NotFoundPageComponent} from '../not-found-page/not-found-page.component';
import {ROUTER_TOKENS} from './router-tokens.model';

export const routes: Routes = [
  {path: ROUTER_TOKENS.HOME, component: WelcomePageComponent, pathMatch: 'full',},
  {path: "**", component: NotFoundPageComponent, title: "Not Found" },
];
