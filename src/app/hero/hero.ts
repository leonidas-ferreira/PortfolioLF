import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true, // Adicionado para manter o padrão
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent { } // Nome alterado de Hero para HeroComponent