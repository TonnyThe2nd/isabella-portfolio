import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.html',
  styleUrls: ['./sobre.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(50px)' }),
          stagger(100, [
            animate('600ms cubic-bezier(0.35, 0, 0.25, 1)', 
              style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ]),
    trigger('lineAnimation', [
      transition(':enter', [
        style({ height: '0%' }),
        animate('1.5s ease-out', style({ height: '100%' }))
      ])
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class Sobre implements OnInit {
  // Informações pessoais
  sobreMim = {
    nome:'Isabella',
    titulo: 'Publicitária',
    descricao: 'Publicitária apaixonada por comunicação e criatividade, especializada em Marketing Digital e Social Media. Atua na criação de conteúdos visuais e estratégias digitais que conectam marcas ao seu público de forma autêntica, fortalecendo a presença online e gerando resultados reais por meio de narrativas envolventes e memoráveis.',
    experiencia: '2',
    projetosCompletos: '4',
    clientesSatisfeitos: 'Vários'
  };

  visibleProjects: Project[] = [];
  activeProject: number | null = null;
  isMobile = false;

  @HostListener('window:scroll')
  onScroll(): void {
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkMobile();
  }

  ngOnInit(): void {
    this.checkMobile();
  }

  checkMobile(): void {
    this.isMobile = window.innerWidth < 768;
  }



  scrollToProject(index: number): void {
    const element = document.getElementById(`project-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }


}