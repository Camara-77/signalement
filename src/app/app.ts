import { Component, signal } from '@angular/core';
import { Formulaire } from './components/formulaire/formulaire';

@Component({
  selector: 'app-root',
  imports: [Formulaire],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
