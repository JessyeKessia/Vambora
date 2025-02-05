import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: false,
})
export class SidebarComponent {
  isCollapsed = false; // Estado inicial do sidebar
  itemSelecionado: number = -1;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  selecionarItem(index: number) {
    this.itemSelecionado = index;
  }
}
