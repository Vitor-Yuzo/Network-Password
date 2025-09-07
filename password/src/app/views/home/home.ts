import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  providers: [AuthService],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router,private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

    login() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (res) => {
          // Salva o token
          localStorage.setItem('Token', res.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          // Tratar erros (ex: 401, 400, etc.)
          console.error('Erro no login:', err);
        }
      });
    } else {
      alert('Preencha todos os campos corretamente')
    }
  }
  
  irParaDashboard() {
    this.router.navigate(['/dashboard']);
  }

  irParaRegistro() {
    this.router.navigate(['registro']);
  }
}