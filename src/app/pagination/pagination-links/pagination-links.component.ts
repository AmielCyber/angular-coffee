import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';

@Component({
  selector: 'app-pagination-links',
  imports: [],
  templateUrl: './pagination-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationLinksComponent {
  disablePrevious = input.required<boolean>();
  disableNext = input.required<boolean>();
  prevPage = output<void>();
  nextPage = output<void>();
}
