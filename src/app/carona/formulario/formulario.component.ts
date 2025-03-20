import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemSweetService } from '../../shared/servicos/mensagem-sweet.service';
import { CaronaRestService } from '../../shared/servicos/carona-rest.service';
import { UsuarioService } from '../../shared/servicos/usuario.service';

@Component({
  selector: 'app-formulario',
  standalone: false,
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  caronaForm!: FormGroup;
  nomeUsuario: string = '';
  tipoUsuario: string = '';

  constructor(
    private fb: FormBuilder,
    private apiService: CaronaRestService,
    private roteador: Router,
    private rotaAtivada: ActivatedRoute,
    private mensagemService: MensagemSweetService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.inicializarFormulario();
    this.carregarUsuario();
  }

  inicializarFormulario() {
    this.caronaForm = this.fb.group({
      motorista: ['', Validators.required],
      dataSaida: ['', Validators.required],
      enderecoPartida: ['', Validators.required],
      enderecoChegada: ['', Validators.required],
      valor: [null, [Validators.required, Validators.min(1)]],
      vagas: [null, [Validators.required, Validators.min(1)]],
      textoObservacoes: ['']
    });
  }

  carregarUsuario() {
    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);
      this.nomeUsuario = usuario.nome;
      this.tipoUsuario = usuario.tipo;
      this.usuarioService.setTipoUsuario(this.tipoUsuario);
    }
  }

  cadastrarViagem() {
    if (this.caronaForm.invalid) {
      this.mensagemService.erro('Preencha todos os campos obrigatórios!');
      return;
    }
    if (!this.ehMotorista()) {
      this.mensagemService.erro('Só quem pode solicitar viagens são motoristas!');
      return;
    }

    this.apiService.cadastrar(this.caronaForm.value).subscribe({
      next: () => {
        this.mensagemService.sucesso('Viagem cadastrada com sucesso!');
        this.roteador.navigate(['/home']);
      },
      error: (erro) => {
        console.error('Erro ao cadastrar viagem:', erro);
        this.mensagemService.erro('Erro ao cadastrar viagem. Tente novamente!');
      },
    });
  }

  ehMotorista(): boolean {
    return this.tipoUsuario === 'Motorista';
  }
}
