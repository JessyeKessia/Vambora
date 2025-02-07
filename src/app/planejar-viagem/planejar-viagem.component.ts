import { Component } from '@angular/core';
import { Carona } from '../../app/modelo/carona/carona';
import { ApiService } from '../services/api-rest.service';
import { MensagemSweetService } from '../services/mensagem-sweet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-planejar-viagem',
  templateUrl: './planejar-viagem.component.html',
  styleUrls: ['./planejar-viagem.component.css'],
  standalone:false,
})
export class PlanejarViagemComponent {
  carona: Carona = new Carona(); 
  observacoes: string = 'nao';
  observacoesTexto: string = '';
  exibirObservacoes: boolean = false;

  constructor(
    private apiService: ApiService,
    private roteador: Router,
    private mensagemService: MensagemSweetService,
    private rotaAtivada: ActivatedRoute
  ) {}

  cadastrarViagem() {
    if (!this.validarDados()) {
      this.mensagemService.erro('Preencha todos os campos obrigatórios!');
      return;
    }

    this.apiService.cadastrar(this.carona).subscribe({
      next: (viagemCadastrada) => {
        this.mensagemService.sucesso('Viagem cadastrada com sucesso!');
        this.roteador.navigate(['/minhas-viagens']);
      },
      error: (erro) => {
        console.error('Erro ao cadastrar viagem:', erro);
        this.mensagemService.erro('Erro ao cadastrar viagem. Tente novamente!');
      },
    });
  }

  mostrarObservacoes() {
    this.exibirObservacoes = this.observacoes === 'sim';
  }


  validarDados(): boolean {
    return (
      !!this.carona.motorista &&
      !!this.carona.dataSaida &&
      !!this.carona.enderecoPartida &&
      !!this.carona.enderecoChegada &&
      this.carona.valor !== undefined &&
      this.carona.vagas !== undefined &&
      this.carona.observacoes !== null && this.carona.observacoes !== undefined && 
      (this.carona.observacoes ? !!this.carona.textoObservacoes : true)
    );
  }


}

