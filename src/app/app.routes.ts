import { Routes } from '@angular/router';
import { TelaLoginComponent } from "./telas-componentes/tela-login/tela-login.component"
import { TelaCadastroComponent } from "./telas-componentes/tela-cadastro/tela-cadastro.component"
import { TelaPrincipalComponent } from "./telas-componentes/tela-principal/tela-principal.component"
import { SidebarComponent } from "./sidebar/sidebar.component"



export const routes: Routes = [
    {path: 'Tela-Login', component: TelaLoginComponent},
    {path: 'Tela-Cadastro', component: TelaCadastroComponent},
    {path: 'Tela-Principal', component: TelaPrincipalComponent},
    {path: 'Sidebar', component: SidebarComponent},

];
