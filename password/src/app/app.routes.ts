import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Cadastro1 } from './views/cadastro-1/cadastro-1';
import { Dashboard } from './views/dashboard/dashboard';
import { Cadastro2 } from './views/cadastro-2/cadastro-2';

export const routes: Routes = [
  { 
    path: '', 
    component: Home, 
    title: 'Login' 
  },

  { 
    path: 'cadastro', 
    component: Cadastro1, 
    title: 'Cadastro' 
  },

  { 
    path: 'dashboard', 
    component: Dashboard, 
    title: 'Dashboard' 
  },

  { 
    path: 'registro-senha', 
    component: Cadastro2, 
    title: 'Registro de Senha' 
  }
];

