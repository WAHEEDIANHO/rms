import {Component, EventEmitter, input, Output, output, signal} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dashboard-header',
  imports: [
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    isOpen = input.required<boolean>();
    dropdownOpen = input<boolean>(false);
    @Output() toggleMenu = new EventEmitter<void>();
}
