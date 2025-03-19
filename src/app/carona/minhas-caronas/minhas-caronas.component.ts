import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsuarioService } from '../../shared/servicos/usuario.service';

@Component({
  selector: 'app-minhas-caronas',
  standalone: false,
  templateUrl: './minhas-caronas.component.html',
  styleUrl: './minhas-caronas.component.css'
})
export class MinhasCaronasComponent {
  nomeUsuario: string = '';
  tipoUsuario: string = '';
  passageiro: string = "Carlos Silva";

  constructor(private usuarioService : UsuarioService){}

  
  
  viagens = [
    { motorista: 'João', data: '2025-02-10', partidaEndereco: 'Rua A', chegadaEndereco: 'Rua B', valor: 10, vagas: 3 },
    { motorista: 'Luciano', data: '2025-02-08', partidaEndereco: 'Rua blá blá blá', chegadaEndereco: 'Rua', valor: 10, vagas: 1 },
    { motorista: 'Paulo', data: '2025-02-08', partidaEndereco: 'Rua blá blá blá', chegadaEndereco: 'Rua', valor: 10, vagas: 1 },
  ];
  

  totalItems: number = 100;
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  
  ngOnInit(): void {
    this.carregarUsuario();
  }

  carregarUsuario() {
    const usuarioSalvo = localStorage.getItem('usuario');
    console.log(usuarioSalvo);
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);
      this.nomeUsuario = usuario.nome;
      this.tipoUsuario = usuario.tipo;

      this.usuarioService.setTipoUsuario(this.tipoUsuario);
    }
  }

  
  // Método para lidar com eventos de paginação
  handlePageEvent(event: PageEvent): void {
    this.pageSize = event.pageSize;
  }

}
