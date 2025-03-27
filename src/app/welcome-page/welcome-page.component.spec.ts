import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageComponent } from './welcome-page.component';
import {APP_SETTINGS, appSettings} from '../app.settings';
import {provideRouter, Router} from '@angular/router';
import {LINK_TOKENS} from '../routes/router-tokens.model';
import {routes} from '../routes/app.routes';

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent;
  let fixture: ComponentFixture<WelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePageComponent],
      providers: [
        provideRouter(routes),
        { provide: APP_SETTINGS, useValue: appSettings },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display application title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(appSettings.title);
  });
  it('should have link that redirects user to menu page', () => {
    const router = TestBed.inject(Router);
    const spyRouter = spyOn(router, "navigateByUrl");
    const compiled = fixture.nativeElement as HTMLElement;
    const link: HTMLAnchorElement | null = compiled.querySelector('a');
    link?.click();
    expect(link).toBeDefined();
    expect(spyRouter).toHaveBeenCalledWith(
      router.createUrlTree([LINK_TOKENS.MENU]),
      jasmine.anything()
    )
  });
});
