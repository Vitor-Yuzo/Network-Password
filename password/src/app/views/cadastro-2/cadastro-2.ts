import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordService } from '../../services/password-api.service';

@Component({
  selector: 'app-cadastro2',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-2.html',
  styleUrl: './cadastro-2.scss'
})
export class Cadastro2 {

  passwordForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private router: Router,private passwordService: PasswordService) {
    this.passwordForm = this.formBuilder.group(
      {
        plataform: ['',[Validators.required]],
        password: ['', [Validators.required]],
      },
    );
  }
  registerPassword() {
  if (this.passwordForm.valid) {
      
      const { plataform, password } = this.passwordForm.value;
 
      this.passwordService.strongPassword(plataform, password).subscribe({
        next: (res) => {
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Erro no cadastro:', err);
        }
      });
    }
    
  }
}
