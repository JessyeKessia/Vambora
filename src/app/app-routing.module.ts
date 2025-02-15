import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./carona/listagem/listagem.component";
import {FormularioComponent} from "./carona/formulario/formulario.component";
import {TelaPrincipalComponent} from "./tela-principal/tela-principal.component";


const routes: Routes = [
  {
    path: '',
    component: TelaPrincipalComponent,
    pathMatch: 'full'
  },
  {    
    path: 'minhascaronas',
    component: ListagemComponent
  },
  {
    path: 'planejarviagens',
    component: FormularioComponent
  },
  {
    path: 'tela-principal',
    component: TelaPrincipalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
