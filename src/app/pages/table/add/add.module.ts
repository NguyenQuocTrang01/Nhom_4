import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableAddComponent } from './add.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { FormsModule , ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    TableAddComponent,
  ],
})
export class TableAddModule { }
