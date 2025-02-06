import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:false,
})
export class AppComponent {
  title = 'VamboraPweb1';

  isCollapsed = false; 
  itemSelecionado: number = -1;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  selecionarItem(index: number, event: Event) {
    event.stopPropagation(); 
    this.itemSelecionado = index;
  }
}
