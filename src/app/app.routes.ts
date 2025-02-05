import { Routes } from '@angular/router';
import { TelaLoginComponent } from "./tela-login/tela-login.component"
import { TelaCadastroComponent } from "./tela-cadastro/tela-cadastro.component"
import { TelaPrincipalComponent } from "./tela-principal/tela-principal.component"
import { SidebarComponent } from "./sidebar/sidebar.component"



export const routes: Routes = [
    {path: 'Tela-Login', component: TelaLoginComponent},
    {path: 'Tela-Cadastro', component: TelaCadastroComponent},
    {path: 'Tela-Principal', component: TelaPrincipalComponent},
    {path: 'Sidebar', component: SidebarComponent},

];
