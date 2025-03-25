import {ComponentFixture, TestBed, } from '@angular/core/testing';

import { NotFoundPageComponent } from './not-found-page.component';
import {provideRouter} from '@angular/router';
import {ROUTER_TOKENS} from '../routes/router-tokens.model';
import {Component} from '@angular/core';

@Component({template: ""})
class ComponentDummy{}

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter([{path: ROUTER_TOKENS.HOME, component: ComponentDummy}])],
      imports: [NotFoundPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display 404 as first header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain("404");
  });
  it('should display Not Found as second header', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain("Not Found");
  });
  it('should have link that displays home', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link: HTMLAnchorElement | null = compiled.querySelector('a');
    expect(link?.textContent).toContain("home");
  });
  it('should have link to home address to redirect', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const link: HTMLAnchorElement | null = compiled.querySelector('a');
    expect(link?.href).toContain(`/${ROUTER_TOKENS.HOME}`);
  });
});
