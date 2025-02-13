import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';
import { FormsModule } from '@angular/forms'; 
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    FormularioComponent,
    ListagemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    FormularioComponent,
    ListagemComponent
  ]
})
export class CaronaModule { }
