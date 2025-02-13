import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
      CommonModule,
      MatIconModule,
      MatPaginatorModule,
      MatTableModule,
      MatButtonModule
  ],
})
export class MaterialModule { }
