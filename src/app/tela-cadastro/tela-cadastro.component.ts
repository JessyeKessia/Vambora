import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PassageiroFireService } from '../shared/servicos/passageiro-fire.service';  
import { MotoristaFireService } from '../shared/servicos/motorista-fire.service';  
import { MensagemSweetService } from '../shared/servicos/mensagem-sweet.service';

@Component({
  selector: 'app-tela-cadastro',
  standalone: false,
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class TelaCadastroComponent {
  motorista: any = {}; 
  passageiro: any = {}; 

  constructor(
    private passageiroService: PassageiroFireService,  
    private motoristaService: MotoristaFireService,
    private router: Router,
    private mensagemService: MensagemSweetService
  ) { }

  selectedIndex: number = 0; 
  formData = {
    nome: '',
    sobrenome: '',
    telefone: '',
    email: '',
    senha: '',
    cpf: '',
    cnh: '',
    placa: '',
    modelo: ''
  };

  irParaLogin() {
    this.router.navigate(['/tela-login']);
  }

  onSubmit() {
    if (this.selectedIndex === 0) {
      this.passageiro = { ...this.formData }; 
      this.cadastrarPassageiro();
    } else if (this.selectedIndex === 1) {
      this.motorista = { ...this.formData }; 
      this.cadastrarMotorista();
    }
    console.log('Motorista no submit:', this.motorista); 
  }
  
  

  cadastrarPassageiro() {
    if (!this.validarDadosPassageiro()) {
      this.mensagemService.erro('Preencha todos os campos obrigatórios!');
      return;
    }
    this.passageiroService.cadastrarPassageiro(this.passageiro).subscribe(
      response => {
        this.mensagemService.sucesso('Passageiro cadastrado com sucesso!');
      },
      error => {
        this.mensagemService.erro('Erro ao cadastrar o passageiro');
      }
    );
  }

  cadastrarMotorista() {
    if (!this.validarDadosMotorista()) {
      this.mensagemService.erro('Preencha todos os campos obrigatórios!');
      return;
    }
    this.motoristaService.cadastrarMotorista(this.motorista).subscribe(
      response => {
        this.mensagemService.sucesso('Motorista cadastrado com sucesso!');
      },
      error => {
        this.mensagemService.erro('Erro ao cadastrar o motorista');
      }
    );
  }

  validarDadosPassageiro(): boolean {
    return (
      !!this.passageiro.nome?.trim() &&
      !!this.passageiro.sobrenome?.trim() &&
      !!this.passageiro.telefone?.trim() &&
      !!this.passageiro.email?.trim() &&
      this.passageiro.senha !== undefined &&
      !!this.passageiro.cpf?.trim()
    );
  }


  validarDadosMotorista(): boolean {
    return (
      !!this.motorista.nome?.trim() &&
      !!this.motorista.sobrenome?.trim() &&
      !!this.motorista.telefone?.trim() &&
      !!this.motorista.email?.trim() &&
      this.motorista.senha !== undefined &&
      !!this.motorista.cnh?.trim() &&
      this.validarCNH(this.motorista.cnh) &&
      !!this.motorista.placa?.trim() &&
      this.validarPlaca(this.motorista.placa) &&
      !!this.motorista.modelo?.trim()
    );
  }
  

  validarCNH(cnh: string): boolean {
    const regex = /^[A-Z]{3}\d{6}$/;
    return regex.test(cnh);
  }

  validarPlaca(placa: string): boolean {
    const regex = /^[A-Z]{3}-\d{4}$/;
    return regex.test(placa);
  }
}
