import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { TableRoutingModule } from '../table-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TableRoutingModule,
    HttpClientModule,
    NbIconModule, 
    NbButtonModule
  ],
  declarations: [
    TableUpdateComponent,
  ],
})
export class TableUpdateModule { }
