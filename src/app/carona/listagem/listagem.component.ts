import { Component, OnInit } from '@angular/core';
import { Carona } from '../../shared/modelo/carona';
import { CaronaRestService } from '../../shared/servicos/carona-rest.service';
import { MensagemSweetService } from '../../shared/servicos/mensagem-sweet.service';
import {ActivatedRoute, Router} from "@angular/router";

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
  carona: any;

  constructor(
    private apiService: CaronaRestService,
    private mensagemService: MensagemSweetService,
    private roteador: Router
  ) {}

  ngOnInit(): void {
    this.apiService.listar().subscribe(
      (caronas) => {
        this.dataSource = caronas.map(carona => {
          return {
            id: carona.id.toString(),
            motorista: carona.motoristaNome,
            dataSaida: carona.dataDeSaida,
            enderecoPartida: carona.enderecoDePartida,
            enderecoChegada: carona.enderecoDeChegada,
            valor: carona.valor,
            vagas: carona.vagas
        }
      }) as Carona[];
        this.clearEditingState();
      }
    );
  }
  
  clearEditingState(): void {
    this.dataSource.forEach((carona) => {
      carona.isEditing = false;
    });
  }
  

  dataSource: Carona[] = [];
  displayedColumns: string[] = ['motorista', 'dataSaida', 'enderecoPartida', 'enderecoChegada', 'valor', 'vagas', 'actions'];

  editCarona(element: Carona): void {
  
    element.isEditing = true;
  }


  saveCarona(element: Carona): void {
    this.apiService.atualizar(element).subscribe(
      () => {
        element.isEditing = false;  
        this.mensagemService.sucesso('Carona atualizada com sucesso');
        this.roteador.navigate(['/minhascaronas']);
      },
      (error) => {
        this.mensagemService.erro('Erro ao atualizar a carona');
      }
    );
  }

  deleteCarona(element: Carona): void {
    if (!element.id) {
      this.mensagemService.erro('ID da carona inválido');
      return;
    }
  
    if (confirm('Tem certeza que deseja excluir esta carona?')) {
      this.apiService.remover(element.id).subscribe(
        () => {
          const index = this.dataSource.indexOf(element);
          if (index > -1) {
            this.dataSource.splice(index, 1);
          }
          this.mensagemService.sucesso('Carona excluída com sucesso');
          window.location.reload();
        },
        (error) => {
          this.mensagemService.erro('Erro ao excluir a carona');
        }
      );
    }
  }
  
  
}

