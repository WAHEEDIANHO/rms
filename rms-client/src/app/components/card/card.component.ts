import {Component, input} from '@angular/core';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  title = input.required<string>();
}
