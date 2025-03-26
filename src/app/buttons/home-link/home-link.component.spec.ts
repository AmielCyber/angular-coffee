import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Component } from '@angular/core';

import { HomeLinkComponent } from './home-link.component';
import {provideRouter, Router} from '@angular/router';
import {LINK_TOKENS, ROUTER_TOKENS} from '../../routes/router-tokens.model';

@Component({template: ""})
class ComponentDummy{}
describe('HomeLinkComponent', () => {
  let component: HomeLinkComponent;
  let fixture: ComponentFixture<HomeLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([{path: ROUTER_TOKENS.HOME, component: ComponentDummy}])],
      imports: [HomeLinkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have one link', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link: HTMLAnchorElement | null = compiled.querySelector('a');
    expect(link).toBeDefined();
  });
  it('should have link that redirects to home', () => {
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
  it('should have aria-labeled labeled home', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const ariaLabeledTag: Element | null = compiled.querySelector("[aria-label]")
    expect(ariaLabeledTag?.ariaLabel).toContain("Home");
  });
});
