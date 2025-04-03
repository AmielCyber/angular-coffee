import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';

import {PaginationLinksComponent} from './pagination-links.component';

@Component({
  imports: [PaginationLinksComponent],
  template: `
    <app-pagination-links
      [disableNext]="nextDisabled"
      [disablePrevious]="prevDisabled"
      (prevPage)="onPrevCalled = true"
      (nextPage)="onNextCalled = true"
    /> `
})
class HostComponent {
  nextDisabled = false;
  prevDisabled = false;
  onNextCalled = false;
  onPrevCalled = false;
}

describe('PaginationLinksComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have navigation with aria label pagination', () => {
    const nav = fixture.nativeElement.querySelector('nav') as HTMLElement;
    expect(nav).toBeTruthy();
    expect(nav.ariaLabel).toMatch(/pagination/i);
  });
  describe("previous button", () => {
    let button: HTMLButtonElement | undefined;
    beforeEach(() => {
      button = getButton(/previous/i, fixture);
    })
    it('should be enabled when input is enabled', () => {
      component.prevDisabled = false;
      fixture.detectChanges();

      expect(button?.disabled).toBeFalse();
    });
    it("should call onPrev when clicked", () => {
      component.prevDisabled = false;
      component.onPrevCalled = false;
      fixture.detectChanges();

      button?.click();
      fixture.detectChanges();

      expect(component.onPrevCalled).toBeTrue();
    })
    it('should be disabled when input is enabled', () => {
      component.prevDisabled = true;
      fixture.detectChanges();

      expect(button?.disabled).toBeTrue();
    });
  })
  describe("next button", () => {
    let button: HTMLButtonElement | undefined;
    beforeEach(() => {
      button = getButton(/next/i, fixture);
    })
    it('should be enabled when input is enabled', () => {
      component.nextDisabled = false;
      fixture.detectChanges();

      expect(button?.disabled).toBeFalse();
    });
    it("should call onNext when clicked", () => {
      component.nextDisabled = false;
      component.onNextCalled = false;
      fixture.detectChanges();

      button?.click();
      fixture.detectChanges();

      expect(component.onNextCalled).toBeTrue();
    })
    it('should be disabled when input is enabled', () => {
      component.nextDisabled = true;
      fixture.detectChanges();

      expect(button?.disabled).toBeTrue();
    });
  })
});

function getButton(textContent: RegExp, fixture: ComponentFixture<HostComponent>): HTMLButtonElement | undefined {
  const buttons: HTMLButtonElement[] = fixture.nativeElement.querySelectorAll('button') ?? [];
  return Array.from(buttons).find(b => b.textContent?.match(textContent));
}
