import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UsuarioService } from '../../shared/servicos/usuario.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: false
})
export class SidenavComponent implements OnInit {
  isCollapsed = false;
  itemSelecionado: number = -1;
  nomeUsuario: string = '';
  tipoUsuario: string = '';

  menuItems = [
    { label: 'Home', icon: 'home', link: '/tela-principal' },
    { label: 'Minhas caronas', icon: 'luggage', link: '/tela-listagem' },
    { label: 'Planejar viagem', icon: 'directions_car', link: '/planejarviagens' },
    { label: 'Listar viagens', icon: 'emoji_transportation', link: '/minhascaronas' },
    { label: 'Help', icon: 'help', link: '/help' }
  ];

  constructor(
    private router: Router,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.carregarUsuario();
    this.atualizarSelecaoPorRota(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.atualizarSelecaoPorRota(event.urlAfterRedirects);
      }
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

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  selecionarItem(index: number, event: Event) {
    event.stopPropagation();
    this.itemSelecionado = index;
  }

  private atualizarSelecaoPorRota(url: string) {
    const itemIndex = this.menuItems.findIndex(item => url.startsWith(item.link));
    this.itemSelecionado = itemIndex >= 0 ? itemIndex : -1;
  }

  logout() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/tela-login']);
  }
}
