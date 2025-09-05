import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './views/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('password');
}
