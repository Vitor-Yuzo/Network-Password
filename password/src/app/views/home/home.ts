import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

  constructor(private router: Router) {}

  onClick(email: string, password: string) {
    alert(`Email: ${email}\nPassword: ${password}`);
    // aqui você pode validar e redirecionar
    this.router.navigate(['dashboard']);
  }
  
  irParaDashboard() {
    this.router.navigate(['/dashboard']);
  }

  irParaRegistro() {
    this.router.navigate(['registro']);
  }
}