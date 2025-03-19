import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PassageiroFireService } from '../shared/servicos/passageiro-fire.service';
import { MotoristaFireService } from '../shared/servicos/motorista-fire.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css'],
  standalone: false
})
export class TelaLoginComponent {
  email: string = '';
  senha: string = '';

  constructor(
    private router: Router, // Injeção do Router
    private passageiroService: PassageiroFireService, // Injeção do PassageiroFireService
    private motoristaService: MotoristaFireService // Injeção do MotoristaFireService
  ) {}

  login() {
    this.verificarUsuario(this.email, this.senha);
  }

  verificarUsuario(email: string, senha: string) {
    // Primeiro, tentamos verificar o passageiro
    this.passageiroService.logarPassageiro(email, senha).pipe(
      catchError((error) => {
        console.error('Erro ao verificar passageiro:', error);
        return of(null); // Retorna um observable vazio se ocorrer um erro
      })
    ).subscribe(passageiro => {
      if (passageiro) {
        console.log('Usuário encontrado como passageiro');
        this.router.navigate(['/dashboard']);
        return;
      }

      // Caso contrário, verificamos o motorista
      this.motoristaService.logarMotorista(email, senha).pipe(
        catchError((error) => {
          console.error('Erro ao verificar motorista:', error);
          return of(null); // Retorna um observable vazio se ocorrer um erro
        })
      ).subscribe(motorista => {
        if (motorista) {
          console.log('Usuário encontrado como motorista');
          this.router.navigate(['/dashboard']);
        } else {
          console.log('Usuário não encontrado');
        }
      });
    });
  }

  irParaCadastro() {
    this.router.navigate(['/tela-cadastro']);
  }
}
