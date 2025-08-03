import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  loginMessage = '';

  constructor(private authService: AuthService) {}

  login() {
    const ok = this.authService.authenticate(this.username, this.password);
    this.loginMessage = ok ? 'Ingreso exitoso' : 'Credenciales inválidas';
    console.log(this.loginMessage);
  }
}
