import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TelaPrincipalComponent } from './telas-componentes/tela-principal/tela-principal.component';
import { TelaCadastroComponent } from './telas-componentes/tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './telas-componentes/tela-login/tela-login.component';
import { PlanejarViagemComponent } from './CRUD/cadastrar-viagem/planejar-viagem.component';
import { MinhasViagensComponent } from './CRUD/listar-viagens/minhas-viagens.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'tela-principal', component: TelaPrincipalComponent },
  { path: 'tela-cadastro', component: TelaCadastroComponent },
  { path: 'tela-login', component: TelaLoginComponent },
  { path: 'cadastrar-viagem', component: PlanejarViagemComponent},
  { path: 'listar-viagens', component: MinhasViagensComponent},
  { path: '', redirectTo: 'tela-principal', pathMatch: 'full' },
  { path: '**', redirectTo: 'tela-principal' }
];

@NgModule({
  declarations: [
    AppComponent,
    TelaPrincipalComponent,
    TelaCadastroComponent,
    TelaLoginComponent,
    PlanejarViagemComponent,
    MinhasViagensComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
