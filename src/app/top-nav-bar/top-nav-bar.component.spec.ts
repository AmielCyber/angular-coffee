import {ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRouter, Router} from '@angular/router';

import {TopNavBarComponent} from './top-nav-bar.component';
import {LINK_TOKENS, ROUTER_TOKENS} from '../routes/router-tokens.model';
import {Component} from '@angular/core';

@Component({template: ""})
class ComponentDummy {
}

describe('TopNavBarComponent', () => {
  let component: TopNavBarComponent;
  let fixture: ComponentFixture<TopNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([{path: ROUTER_TOKENS.HOME, component: ComponentDummy}])],
      imports: [TopNavBarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe("home link", () => {
    it('should exist', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const links = compiled.querySelectorAll("a");
      const linkList = [...links?.values()]
      expect(linkList.find(h => h.textContent?.match(/home/i))).toBeDefined();
    });
    it('should redirect to home', () => {
      const router = TestBed.inject(Router);
      const spyRouter = spyOn(router, "navigateByUrl");


      const compiled = fixture.nativeElement as HTMLElement;
      const link: HTMLAnchorElement | null = compiled.querySelector('a');
      link?.click();
      expect(spyRouter).toHaveBeenCalledWith(
        router.createUrlTree([LINK_TOKENS.HOME]),
        jasmine.anything()
      )
    });
  });
  describe("menu link", () => {
    it('should exist', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const links = compiled.querySelectorAll("a");
      const linkList = [...links?.values()]
      expect(linkList.find(h => h.textContent?.match(/menu/i))).toBeDefined();
    });
    it('should redirect to menu link', () => {
      const router = TestBed.inject(Router);
      const spyRouter = spyOn(router, "navigateByUrl");
      const compiled = fixture.nativeElement as HTMLElement;
      const links = compiled.querySelectorAll('a');
      const linkList = [...links?.values()]
      const menuLink = linkList.find(h => h.textContent?.match(/menu/i));
      expect(menuLink).toBeDefined();

      menuLink?.click();
      expect(spyRouter).toHaveBeenCalledWith(
        router.createUrlTree([LINK_TOKENS.MENU]),
        jasmine.anything()
      )
    });
  });
});
