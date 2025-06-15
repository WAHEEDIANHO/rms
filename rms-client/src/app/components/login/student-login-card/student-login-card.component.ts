import { Component } from '@angular/core';
import {CardComponent} from '../../card/card.component';

@Component({
  selector: 'app-student-login-card',
  imports: [
    CardComponent
  ],
  templateUrl: './student-login-card.component.html',
  styleUrl: './student-login-card.component.css'
})
export class StudentLoginCardComponent {
}
