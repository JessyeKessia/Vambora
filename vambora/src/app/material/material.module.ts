import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule
  ],
  exports: [
      CommonModule,
      MatIconModule,
      MatPaginatorModule,
      MatTableModule
  ],
})
export class MaterialModule { }
