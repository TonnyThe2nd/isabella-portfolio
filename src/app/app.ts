import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contato } from './contato/contato';
import { Introducao } from './introducao/introducao';
import { Projeto } from './projeto/projeto';
import { Sobre } from './sobre/sobre';
import { Header } from './header/header';
import { Capa } from './capa/capa';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Contato, Introducao, Projeto, Sobre, Header, Capa],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('isabella');
}
