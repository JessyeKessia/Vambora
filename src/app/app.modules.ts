import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component'; 
import { TelaPrincipalComponent } from './tela-principal/tela-principal.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent 
  ],
  imports: [
    BrowserModule,
    MatIcon, 
    RouterModule.forRoot([ 
    {path: 'Tela-Login', component: TelaLoginComponent},
    {path: 'Tela-Cadastro', component: TelaCadastroComponent},
    {path: 'Tela-Principal', component: TelaPrincipalComponent},
    {path: 'Sidebar', component: SidebarComponent},
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }