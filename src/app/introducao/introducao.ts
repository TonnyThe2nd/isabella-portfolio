import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-introducao',
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './introducao.html',
  styleUrl: './introducao.css',
})
export class Introducao {
  scroll(contato: string) {
    let element = document.getElementById(contato);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
