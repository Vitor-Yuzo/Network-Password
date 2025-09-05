import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Cadastro1 } from './views/cadastro-1/cadastro-1';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'cadastro_1', component: Cadastro1 }
];

