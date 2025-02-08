import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
})
export class AppComponent {
  title = 'VamboraPweb1';
  isCollapsed = false;
  itemSelecionado: number = -1; 

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
    if (url.startsWith('/tela-principal')) {
      this.itemSelecionado = 0;
    } else if (url.startsWith('/listar-viagens')) {
      this.itemSelecionado = 1;
    } else if (url.startsWith('/cadastrar-viagem')) {
      this.itemSelecionado = 2;
    } else if (url.startsWith('/help')) {
      this.itemSelecionado = 4;
    } else {
      this.itemSelecionado = -1; 
    }
  }
}
