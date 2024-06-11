import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import { TableAddComponent } from './add/add.component';
import { TableUpdateComponent } from './update/update.component';
import { TableDeleteComponent } from './delete/delete.component';
import { BreadcrumbModule } from "xng-breadcrumb";

import { TableRoutingModule } from './table-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    TableRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    NbIconModule,
    NbButtonModule
  ],
  declarations: [
    TableComponent,
    TableAddComponent,
    TableUpdateComponent,
    TableDeleteComponent
  ],
})
export class TableModule { }
