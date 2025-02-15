import { Component, OnInit } from '@angular/core';
import { Carona } from '../../shared/modelo/carona';
import { CaronaRestService } from '../../shared/servicos/carona-rest.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-listagem',
  standalone: false,
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})

export class ListagemComponent implements OnInit {

  constructor(
      private apiService: CaronaRestService
  ) {}

  ngOnInit(): void {
    this.apiService.listar().subscribe(
        caronas => this.dataSource = caronas
    )
  }

  dataSource: Carona[] =  [];
  displayedColumns: string[] = ['motorista', 'dataSaida', 'enderecoPartida', 'enderecoChegada', 'valor', 'vagas']
}