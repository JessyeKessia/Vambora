import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private nomeUsuario: string = '';
  private tipoUsuario: string = '';

  setNomeUsuario(nome: string) {
    this.nomeUsuario = nome;
  }

  getNomeUsuario(): string {
    return this.nomeUsuario;
  }

  setTipoUsuario(tipo: string) {
    this.tipoUsuario = tipo;
  }

  getTipoUsuario(): string {
    return this.tipoUsuario;
  }
}
