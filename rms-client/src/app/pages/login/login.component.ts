import { Component } from '@angular/core';
import {HeaderComponent} from '../../components/login/login-header/header.component';
import {StudentLoginCardComponent} from '../../components/login/student-login-card/student-login-card.component';
import {AdminLoginCardComponent} from '../../components/login/admin-login-card/admin-login-card.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {TestComponent} from '../../test/test.component';

@Component({
  selector: 'app-login',
  imports: [
    HeaderComponent,
    StudentLoginCardComponent,
    AdminLoginCardComponent,
    FooterComponent,
    TestComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
