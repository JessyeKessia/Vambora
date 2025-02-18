import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatChipsModule
  ],
  exports: [
      CommonModule,
      MatIconModule,
      MatPaginatorModule,
      MatTableModule,
      MatButtonModule,
      MatChipsModule
  ],
})
export class MaterialModule { }
