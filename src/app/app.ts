import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero';
import { SobreComponent } from './sobre/sobre';
import { SkillsComponent } from './skills/skills';
import { ProjetosComponent } from './projetos/projetos';
import { ContatoComponent } from './contato/contato';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent, SobreComponent, SkillsComponent, ProjetosComponent, ContatoComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'PortfolioLF';
}