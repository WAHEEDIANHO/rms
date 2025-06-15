import {Component, signal} from '@angular/core';
import {HeaderComponent} from '../../components/dashboard/header/header.component';
import {NgClass} from '@angular/common';
import {SidebarComponent} from '../../components/dashboard/sidebar/sidebar.component';
import {MainContentHeaderComponent} from '../../components/dashboard/main-content-header/main-content-header.component';
import {
  MainContentBreadcumbComponent
} from '../../components/dashboard/main-content-breadcumb/main-content-breadcumb.component';
import {
  DashboardSummaryCardComponent
} from '../../components/dashboard/dashboard-summary-card/dashboard-summary-card.component';
import {
  DashboardChartCardComponent
} from '../../components/dashboard/dashboard-chart-card/dashboard-chart-card.component';
import {
  DashboardStudentRankComponent
} from '../../components/dashboard/dashboard-student-rank/dashboard-student-rank.component';
import {
  DashboardMiniChartCardComponent
} from '../../components/dashboard/dashboard-mini-chart-card/dashboard-mini-chart-card.component';

@Component({
  selector: 'app-admin',
  imports: [
    HeaderComponent,
    NgClass,
    SidebarComponent,
    MainContentHeaderComponent,
    MainContentBreadcumbComponent,
    DashboardSummaryCardComponent,
    DashboardChartCardComponent,
    DashboardStudentRankComponent,
    DashboardMiniChartCardComponent
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  isOpen = signal<boolean>(false);
  dropdownOpen = signal<boolean>(false);
}
