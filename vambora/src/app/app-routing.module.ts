import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./carona/listagem/listagem.component";
import {FormularioComponent} from "./carona/formulario/formulario.component";


const routes: Routes = [
  {    
    path: 'minhascaronas',
    component: ListagemComponent
  },
  {
    path: 'planejarviagens',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
