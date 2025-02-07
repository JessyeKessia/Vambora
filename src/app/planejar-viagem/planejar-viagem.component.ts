import { Component } from '@angular/core';

@Component({
  selector: 'app-planejar-viagem',
  templateUrl: './planejar-viagem.component.html',
  styleUrls: ['./planejar-viagem.component.css'],
  standalone: false,
})
export class PlanejarViagemComponent {
  motorista: string = '';
  dataSaida: string = '';
  enderecoPartida: string = '';
  enderecoChegada: string = '';
  valor: number = 10;
  vagas: number = 1;
  observacoes: string = 'nao';
  observacoesTexto: string = '';
  exibirObservacoes: boolean = false;

  mostrarObservacoes() {
    this.exibirObservacoes = this.observacoes === 'sim';
  }

  cadastrarViagem() {
    const viagem = {
      motorista: this.motorista,
      dataSaida: this.dataSaida,
      enderecoPartida: this.enderecoPartida,
      enderecoChegada: this.enderecoChegada,
      valor: this.valor,
      vagas: this.vagas,
      observacoes: this.observacoesTexto
    };

    console.log('Viagem cadastrada:', viagem);
    alert('Viagem cadastrada com sucesso!');
  }
}
