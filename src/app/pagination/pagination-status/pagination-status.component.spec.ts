import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Component, DebugElement} from '@angular/core';

import {PaginationStatusComponent} from './pagination-status.component';
import {Pagination} from '../pagination.model';
import {By} from '@angular/platform-browser';

const expectedPagination = {
  currentPage: 1, pageSize: 2, totalCount: 20, totalPages: 5
}
@Component({
  imports: [PaginationStatusComponent],
  template: `
    <app-pagination-status [pagination]="expectedPagination"/> `
})
class HostComponent {
  readonly expectedPagination: Pagination = expectedPagination;
}

describe('PaginationStatusComponent', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent, PaginationStatusComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have article section with aria label status', () => {
    const article = fixture.debugElement.query(By.css('article'));
    expect(article).toBeTruthy();
    expect(article.attributes['aria-label']).toMatch(/status/i);
  });
  describe("should have section", () => {
    let sections: HTMLElement[];
    beforeEach(() => {
      sections = Array.from(fixture.nativeElement.querySelectorAll("section") ?? []);
    })
    it('with current page', () => {
      const section = sections
        .find(e => e.textContent?.match(/current/i));
      expect(section).toBeTruthy();
      expect(section?.textContent).toContain(expectedPagination.currentPage);
    });
    it('with page size', () => {
      const section = sections
        .find(e => e.textContent?.match(/size/i));
      expect(section).toBeTruthy();
      expect(section?.textContent).toContain(expectedPagination.pageSize);
    });
    it('with total pages', () => {
      const section = sections
        .find(e => e.textContent?.match(/total/i));
      expect(section).toBeTruthy();
      expect(section?.textContent).toContain(expectedPagination.totalPages);
    });
  })
});
