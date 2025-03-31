import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CoffeeIconComponent} from '../icons/coffee-icon.component';
import {LINK_TOKENS} from '../routes/router-tokens.model';
import {CartButtonComponent} from '../buttons/cart-button/cart-button.component';

@Component({
  selector: 'app-top-nav-bar',
  imports: [
    RouterLink,
    RouterLinkActive,
    CoffeeIconComponent,
    CartButtonComponent
  ],
  templateUrl: './top-nav-bar.component.html',
})
export class TopNavBarComponent {
  protected readonly LINK_TOKENS = LINK_TOKENS;
}
