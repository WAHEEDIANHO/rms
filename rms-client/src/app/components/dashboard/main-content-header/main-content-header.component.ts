import {Component, EventEmitter, input, Output} from '@angular/core';

@Component({
  selector: 'app-main-content-header',
  imports: [],
  templateUrl: './main-content-header.component.html',
  styleUrl: './main-content-header.component.css'
})
export class MainContentHeaderComponent {
  dropdownOpen = input<boolean>(false);
  @Output() toggleMenu = new EventEmitter<void>();
}
