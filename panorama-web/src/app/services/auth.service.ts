import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly users: User[] = [
    { username: 'usuarioPOC', password: '123456@' }
  ];

  authenticate(username: string, password: string): boolean {
    return this.users.some(u => u.username === username && u.password === password);
  }
}
