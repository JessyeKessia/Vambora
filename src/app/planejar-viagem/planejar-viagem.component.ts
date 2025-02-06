import { Component } from '@angular/core';

@Component({
  selector: 'app-planejar-viagem',
  templateUrl: './planejar-viagem.component.html',
  styleUrl: './planejar-viagem.component.css',
  standalone: false,
})
export class PlanejarViagemComponent {
  mostrarObservacoes() {
    const select = document.getElementById('observacoes') as HTMLSelectElement;
    const textarea = document.getElementById('observacoes-texto') as HTMLTextAreaElement;

    if (select.value === 'sim') {
      textarea.style.display = 'block';
    } else {
      textarea.style.display = 'none';
    }
  }

}
