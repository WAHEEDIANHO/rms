import {Component, input} from '@angular/core';

@Component({
  selector: 'app-dashboard-summary-card',
  imports: [],
  templateUrl: './dashboard-summary-card.component.html',
  styleUrl: './dashboard-summary-card.component.css'
})
export class DashboardSummaryCardComponent {
  title = input.required<string>();
  count = input.required<number>();
}
