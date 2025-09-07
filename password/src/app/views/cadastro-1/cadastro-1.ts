import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-cadastro1',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-1.html',
  styleUrl: './cadastro-1.scss'
})

export class Cadastro1 {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private authService: AuthService) {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordsMatchValidator } // 👉 aqui usa o método
    );
  }

 
  passwordsMatchValidator(control: any) {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordsNotMatching: true };
  }

 register() {
    if (this.registerForm.valid) {
      
      const { email, password } = this.registerForm.value;
 
      this.authService.register(email, password).subscribe({
        next: (res) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Erro no cadastro:', err);
        }
      });
    }
 }

}
