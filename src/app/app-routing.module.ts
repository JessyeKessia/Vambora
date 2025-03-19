import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListagemComponent} from "./carona/listagem/listagem.component";
import {FormularioComponent} from "./carona/formulario/formulario.component";
import {TelaPrincipalComponent} from "./tela-principal/tela-principal.component";
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { MinhasCaronasComponent } from "./carona/minhas-caronas/minhas-caronas.component"


const routes: Routes = [
  {
    path: '',
    component: TelaLoginComponent,
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
  },
  { path: 'tela-login',
    component: TelaLoginComponent
  },
  { path: 'tela-cadastro',
    component: TelaCadastroComponent
  },
  {
    path: "tela-listagem",
    component: MinhasCaronasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
