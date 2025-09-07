import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
      loading = true;
    constructor(private cd: ChangeDetectorRef,private router: Router,private passwordService: PasswordService){}
      ngOnInit(): void {
    this.loadPasswords();
  }
   loadPasswords() {
    this.passwordService.getPasswords().subscribe({
      next: (res) => {
        this.userPasswords = res;
        this.loading = false;
        this.cd.detectChanges();
        console.log('Dados recebidos:', this.userPasswords);
      },
      error: (err) => {
        console.error('Erro ao carregar dados:', err);
        this.loading = false;
      }
    });
  }
  copyPassword(password: string) {
  if (!password) return;
  // usa a API de Clipboard
  navigator.clipboard.writeText(password).then(
    () => {
      console.log('Senha copiada para a área de transferência!');
      // opcional: mostrar uma notificação para o usuário
    },
    (err) => {
      console.error('Erro ao copiar senha: ', err);
    }
  );
}


logout() {
  // Remove o token do localStorage
  localStorage.removeItem('Token');
  this.router.navigate(['/']);
}

}
