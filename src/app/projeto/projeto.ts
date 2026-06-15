import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { trigger, transition, style, animate } from '@angular/animations';

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
  selector: 'app-projeto',
  templateUrl: './projeto.html',
  styleUrls: ['./projeto.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100px) translateY(-50%)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0) translateY(-50%)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(100px) translateY(-50%)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0) translateY(-50%)' }))
      ])
    ])
  ]
})
export class Projeto implements OnInit {
  // Informações pessoais
  sobreMim = {
    nome: 'Seu Nome',
    titulo: 'Desenvolvedor Full Stack',
    descricao: 'Desenvolvedor apaixonado por tecnologia com mais de X anos de experiência criando soluções digitais inovadoras. Especializado em desenvolvimento web moderno com foco em performance, usabilidade e escalabilidade.',
    experiencia: '2 anos',
    projetosCompletos: '4',
    clientesSatisfeitos: 'Vários'
  };

  // Habilidades
  skills: Skill[] = [
    { name: 'Canva', level: 90, category: 'Backend' },
    { name: 'CapCut', level: 85, category: 'Backend' },
    { name: 'Adobe Photoshop', level: 90, category: 'Backend' },
    { name: 'Trello', level: 95, category: 'Backend' },
    { name: 'Meta Ads', level: 80, category: 'Backend' },
    { name: 'Freepik', level: 75, category: 'Backend' },
    { name: 'Criatividade aplicada a comunicação', level: 100, category: 'Frontend' },
    { name: 'Polish', level: 75, category: 'Backend' },
    { name: 'Grid Post', level: 65, category: 'Backend' },
    { name: 'Organizada', level: 100, category: 'Frontend' },
    { name: 'Proativa', level: 100, category: 'Frontend' },
    { name: 'Trabalho em equipe', level: 100, category: 'Frontend' },
    { name: 'Atensiosa', level: 100, category: 'Frontend' },
    { name: 'Comprometida', level: 100, category: 'Frontend' },
    { name: 'Ambiciosa', level: 100, category: 'Frontend' },
  ];

  projects: Project[] = [
    {
      id: 1,
      title: 'PROJETO: CLÍNICA DE ESTÉTICA',
      description: 'Produção e edição de vídeo institucional, com ajustes de legenda, trilha sonora e cortes. O audiovisual foi desenvolvido para transmitir o cuidado com o paciente e o amor pela profissão, mostrando a estética como algo que vai além de um serviço: um propósito.',
      imageUrl: 'assets/imagens/capaProjetos.png',
      technologies: [''],
      link: 'https://drive.google.com/drive/u/1/folders/15csFyvIKXhFePRSTefBn1Cba-vzFeyob'
    },
    {
      id: 2,
      title: 'PROJETO: AUTOESCOLA',
      description: 'Criação de conteúdos visuais que transformaram o momento da aprovação em algo memorável. Fotos, vídeos e depoimentos captaram a emoção, a felicidade e o sentimento de conquista dos alunos, criando um elo emocional com o público e fortalecendo a credibilidade da marca por meio de um marketing mais humano.',
      imageUrl: 'assets/imagens/capaProjetos.png',
      technologies: [''],
      link: 'https://drive.google.com/drive/folders/12nmoiYB5YtZVi8MLqdYXjHjThdFgNszj'
    },
    {
      id: 3,
      title: 'PPROJETO: BIA MORAES ACESSÓRIOS',
      description: 'Criação de campanha com foco no universo feminino, explorando tons quentes e referências florais para transmitir leveza e feminilidade. A produção de fotos e vídeos teve como objetivo evidenciar a autenticidade da coleção por meio dos acessórios, traduzindo a paixão presente em cada peça e gerando identificação com o público.',
      imageUrl: 'assets/imagens/capaProjetos.png',
      technologies: [''],
      link: 'https://drive.google.com/drive/u/1/folders/10ZJOV0RdB3rijSSUt-WflQ4-t1WpWDQg'
    },
    {
      id: 4,
      title: 'CENOURÃO - ESTÁGIO EM MARKETING',
      description: 'Atuo como estagiária de marketing no Cenourão, apoiando a criação de conteúdos para redes sociais, planejamento de calendário de postagens e campanhas, além da cobertura de eventos e captação de imagens nas lojas, contribuindo com ideias criativas para o fortalecimento da marca.',
      imageUrl: 'assets/imagens/capaProjetos.png',
      technologies: [''],
      link: 'https://drive.google.com/drive/u/1/folders/10rGvwAuubimXlxm5acHBZWep19vXEl5R'
    },
    {
      id: 5,
      title: 'ABREU & MANGOLINI - CLÍNICA MULTIDISCIPLINAR',
      description: 'Redefinição da identidade visual e do direcionamento criativo da marca, com foco em fortalecer seu posicionamento através de uma comunicação mais humana, acolhedora e estratégica. Além da construção visual, o projeto envolve a criação de conteúdos para redes sociais que reforçam os valores da marca e aproximam sua comunicação do público.',
      imageUrl: 'assets/imagens/capaProjetos.png',
      technologies: [''],
      link: 'https://drive.google.com/drive/u/0/mobile/folders/188OQrly9VKPRMTzkmzv1eCrRcwPIe6uU'
    },
    {
      id: 6,
      title: 'ÓTICA ENCANTO',
      description: 'Desenvolvimento da comunicação e posicionamento digital da marca, envolvendo planejamento estratégico, direção criativa, produção de conteúdo, campanhas de marketing e apoio na estruturação de processos internos para fortalecimento da presença digital.',
      imageUrl: 'assets/imagens/capaProjetos.png',
      technologies: [''],
      link: 'https://drive.google.com/drive/u/0/mobile/folders/1TVPp7HEyDD1NtE5J4LQlwJwMMRMHRIOy'
    }
  ];

  visibleProjects: Project[] = [];
  activeProject: number | null = null;
  isMobile = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.checkScroll();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkMobile();
  }

  ngOnInit(): void {
    this.checkMobile();
    this.checkScroll();
  }

  checkMobile(): void {
    this.isMobile = window.innerWidth < 768;
  }

  checkScroll(): void {
    const projectElements = document.querySelectorAll('.project-card');

    projectElements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

      if (isVisible && !this.visibleProjects.includes(this.projects[index])) {
        setTimeout(() => {
          this.visibleProjects.push(this.projects[index]);
          this.activeProject = this.projects[index].id;
        }, index * 100);
      }
    });
  }

  scrollToProject(index: number): void {
    const element = document.getElementById(`project-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  getProgressPercentage(): number {
    const visibleCount = this.visibleProjects.length;
    return (visibleCount / this.projects.length) * 100;
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }
}