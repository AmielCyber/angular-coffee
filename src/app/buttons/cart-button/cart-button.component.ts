import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

import {CartIconComponent} from '../../icons/cart-icon.component';
import {LINK_TOKENS} from '../../routes/router-tokens.model';

@Component({
  selector: 'app-cart-button',
  imports: [
    CartIconComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './cart-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CartButtonComponent {
  MENU_LINK = LINK_TOKENS.MENU;
  dropDownHidden = signal<true | null>(true); // null to remove attribute
  // TODO: Add cart service

  onHover() {
    this.dropDownHidden.set(null);
  }

  onLeave() {
    this.dropDownHidden.set(true);
  }
}
