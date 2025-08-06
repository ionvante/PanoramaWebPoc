import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    const ok = this.authService.authenticate(this.username, this.password);
    if (ok) {
      this.loginMessage = 'Ingreso exitoso';
      this.router.navigate(['/flujos']);
    } else {
      this.loginMessage = 'Credenciales inválidas';
    }
    console.log(this.loginMessage);
  }
}
