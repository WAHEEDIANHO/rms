import { Component } from '@angular/core';
import {CardComponent} from '../../card/card.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-admin-login-card',
  imports: [
    CardComponent,
    RouterLink
  ],
  templateUrl: './admin-login-card.component.html',
  styleUrl: './admin-login-card.component.css'
})
export class AdminLoginCardComponent {

  handleSubmit() {

  }

  setEmail(value: any) {

  }
}
