import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  standalone: false
})
export class SidenavComponent {
  isCollapsed = false;
  itemSelecionado: number = -1;

  menuItems = [
    { label: 'Home', icon: 'home', link: '/tela-principal' },
    { label: 'Minhas caronas', icon: 'luggage', link: '/minhascaronas' },
    { label: 'Planejar viagem', icon: 'directions_car', link: '/planejarviagens' },
    { label: 'Listar viagens', icon: 'emoji_transportation', link: '/listarviagens' },
    { label: 'Help', icon: 'help', link: '/help' }
  ];

  constructor(private router: Router) {
    this.atualizarSelecaoPorRota(this.router.url);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.atualizarSelecaoPorRota(event.urlAfterRedirects);
      }
    });
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
}
