import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemSweetService } from '../../shared/servicos/mensagem-sweet.service';
import { CaronaRestService } from '../../shared/servicos/carona-rest.service';
import { Carona } from '../../shared/modelo/carona';
import { UsuarioService } from '../../shared/servicos/usuario.service';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  carona: Carona = new Carona();
  observacoesTexto: string = '';
  nomeUsuario: string = '';
  tipoUsuario: string = '';

  constructor(
    private apiService: CaronaRestService,
    private roteador: Router,
    private rotaAtivada: ActivatedRoute,
    private mensagemService: MensagemSweetService,
    private usuarioService : UsuarioService
  ) {}

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

  cadastrarViagem() {
    if (!this.validarDados()) {
      this.mensagemService.erro('Preencha todos os campos obrigatórios!');
      return;
    }
    if (!this.ehMotorista()){
      this.mensagemService.erro('Só quem pode solicitar viagens são motoristas!');
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
  ehMotorista(): boolean{
    if(this.tipoUsuario === "Motorista"){
      return true;
    }
    else{
      return false;
    }
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
