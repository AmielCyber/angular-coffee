import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CartButtonComponent} from './cart-button.component';
import {provideRouter, Router} from '@angular/router';
import {LINK_TOKENS, ROUTER_TOKENS} from '../../routes/router-tokens.model';
import {By} from '@angular/platform-browser';

@Component({template: ""})
class ComponentStub {
}

describe('CartButtonComponent', () => {
  let component: CartButtonComponent;
  let fixture: ComponentFixture<CartButtonComponent>;
  const menuPath = ROUTER_TOKENS.MENU;
  const menuLink = LINK_TOKENS.MENU;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartButtonComponent],
      providers: [provideRouter([{path: menuPath, component: ComponentStub}])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("link", () => {
    it('should be defined', () => {
      const link = fixture.debugElement.query(By.css('a'));
      expect(link).toBeDefined();
    });

    it('should have text content as Cart', () => {
      const link = fixture.debugElement.query(By.css('a'));
      const linkElement = link.nativeElement as HTMLAnchorElement;

      expect(linkElement.textContent).toMatch(/cart/i);
    });

    it('should redirect to menu page when clicked', () => {
      const router = TestBed.inject(Router);
      const routerSpy = spyOn(router, "navigateByUrl")
      const link = fixture.debugElement.query(By.css('a'));
      const linkElement = link.nativeElement as HTMLAnchorElement;
      linkElement.click();

      expect(routerSpy).toHaveBeenCalledWith(
        router.createUrlTree([menuLink]),
        jasmine.anything()
      );
    });
  })
  describe("section", () => {
    it('should be not be visible if anchor tag is not on hover', () => {
      const sectionElement = fixture.nativeElement.querySelector('section') as HTMLDivElement;
      expect(sectionElement.checkVisibility()).toBeFalse();
    });

    it('should be visible if anchor tag is on hover', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const linkElement = compiled.querySelector('a');
      linkElement?.dispatchEvent(new Event('mouseenter'));
      fixture.detectChanges();

      const sectionElement = compiled.querySelector('section');
      expect(sectionElement?.checkVisibility()).toBeTrue()
    });
  })
});
