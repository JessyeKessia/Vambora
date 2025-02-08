import { Component } from '@angular/core';
import { Carona } from '../../modelo/carona/carona';
import { ApiService } from '../../services/api-rest.service';
import { MensagemSweetService } from '../../services/mensagem-sweet.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-viagem',
  templateUrl: './planejar-viagem.component.html',
  styleUrls: ['./planejar-viagem.component.css'],
  standalone:false,
})
export class PlanejarViagemComponent {
  carona: Carona = new Carona();
  exibirObservacoes: boolean = false;
  observacoesTexto: string = '';


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
      next: () => {
        this.mensagemService.sucesso('Viagem cadastrada com sucesso!');
      },
      error: (erro) => {
        console.error('Erro ao cadastrar viagem:', erro);
        this.mensagemService.erro('Erro ao cadastrar viagem. Tente novamente!');
      },
    });
  }

  mostrarObservacoes() {
    this.exibirObservacoes = this.carona.observacoes;
  }


  validarDados(): boolean {
    return (
      !!this.carona.motorista?.trim() &&
      !!this.carona.dataSaida &&
      !!this.carona.enderecoPartida?.trim() &&
      !!this.carona.enderecoChegada?.trim() &&
      this.carona.valor !== undefined &&
      this.carona.valor > 0 &&
      this.carona.vagas !== undefined &&
      this.carona.vagas > 0 &&
      this.carona.observacoes !== null &&
      this.carona.observacoes !== undefined &&
      (this.carona.observacoes ? !!this.carona.textoObservacoes?.trim() : true)
    );
  }


}

