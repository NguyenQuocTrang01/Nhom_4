import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { BreadcrumbModule } from "xng-breadcrumb";

import { TableRoutingModule } from './table-routing.module';
import { TableAddModule } from './add/add.module';
import { TableUpdateModule } from './update/update.module';
import { TableDeleteModule } from './delete/delete.module';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    TableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableAddModule,
    TableUpdateModule,
    TableDeleteModule,
    BreadcrumbModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule
  ],
  declarations: [
    TableComponent,
  ],
})
export class TableModule { }
