import { Component, OnInit } from '@angular/core';
import {PasswordService } from '../../services/password-api.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
      userPasswords: any[] = [];
    constructor(private router: Router,private passwordService: PasswordService){}
      ngOnInit(): void {
    this.loadPasswords();
  }
   loadPasswords() {
    this.passwordService.getPasswords().subscribe({
      next: (res) => {
        this.userPasswords = res;
        console.log('Dados recebidos:', this.userPasswords);
      },
      error: (err) => {
        console.error('Erro ao carregar dados:', err);
      }
    });
  }
  copyPassword(password: string) {
  if (!password) return;

  // Copia para a área de transferência
  navigator.clipboard.writeText(password).then(() => {
    console.log('Senha copiada com sucesso!');
    // Você pode exibir um toast ou alert se quiser
  }).catch(err => {
    console.error('Erro ao copiar a senha: ', err);
  });
}

logout() {
  // Remove o token do localStorage
  localStorage.removeItem('Token');
  this.router.navigate(['/']);
}

}
