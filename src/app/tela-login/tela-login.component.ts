import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PassageiroFireService } from '../shared/servicos/passageiro-fire.service';
import { MotoristaFireService } from '../shared/servicos/motorista-fire.service';
import { MensagemSweetService } from '../shared/servicos/mensagem-sweet.service';

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
    private router: Router,
    private passageiroService: PassageiroFireService,
    private motoristaService: MotoristaFireService,
    private mensagemService: MensagemSweetService
  ) {}

  login() {
    this.verificarUsuario(this.email, this.senha);
  }

  verificarUsuario(email: string, senha: string) {

    this.passageiroService.logarPassageiro(email, senha).subscribe({
      next: (passageiro) => {
        if (passageiro) {
          this.mensagemService.sucesso('Sucesso ao logar');
          this.router.navigate(['/tela-principal']);
          return;
        }
        this.verificarMotorista(email, senha);
      },
      error: (error) => {
        this.mensagemService.erro('Erro ao localizar usuário');
        this.verificarMotorista(email, senha);
      }
    });
  }


  private verificarMotorista(email: string, senha: string) {
    this.motoristaService.logarMotorista(email, senha).subscribe({
      next: (motorista) => {
        if (motorista) {
          this.router.navigate(['/tela-principal']);
        } else {
          this.mensagemService.erro('Usuário não encontrado');
        }
      },
      error: (error) => {
        this.mensagemService.erro('Erro ao localizar usuário');
      }
    });
  }

  irParaCadastro() {
    this.router.navigate(['/tela-cadastro']);
  }
}