import {ChangeDetectionStrategy, Component, input} from '@angular/core';

import { Pagination } from '../pagination.model';

@Component({
  selector: 'app-pagination-status',
  imports: [],
  templateUrl: './pagination-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationStatusComponent {
  pagination = input.required<Pagination>();
}
