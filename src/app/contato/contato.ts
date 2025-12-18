import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './contato.html',
  styleUrls: ['./contato.css']
})
export class Contato implements OnInit {
  
  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    // Inicialização se necessário
  }

  copiarEmail(): void {
    const email = 'isabellamarketing112@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      this.mostrarMensagem('📧 E-mail copiado para a área de transferência!');
    }).catch(err => {
      console.error('Erro ao copiar e-mail:', err);
      this.mostrarMensagem('❌ Erro ao copiar e-mail. Tente novamente.', 'error');
    });
  }

  abrirAgendamento(): void {
    // Link para Calendly ou outra plataforma de agendamento
    const calendlyUrl = 'https://calendly.com/isabella-publicitaria/30min';
    window.open(calendlyUrl, '_blank');
    
    // Alternativa: abrir WhatsApp com mensagem pré-definida
    // this.abrirWhatsApp();
  }

  abrirWhatsApp(): void {
    const phoneNumber = '5516994664360'; 
    const message = 'Olá Isabella! Gostaria de agendar uma conversa sobre um projeto.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  mostrarMensagem(mensagem: string, tipo: 'success' | 'error' = 'success'): void {
    this.snackBar.open(mensagem, 'Fechar', {
      duration: 5000,
      panelClass: tipo === 'success' ? 'snackbar-success' : 'snackbar-error',
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}