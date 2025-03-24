import { Routes } from '@angular/router';

import {WelcomePageComponent, WelcomePageTitle} from './welcome-page/welcome-page.component';

export const routes: Routes = [
  {path: "", component: WelcomePageComponent, pathMatch: 'full', title: WelcomePageTitle,},
];
