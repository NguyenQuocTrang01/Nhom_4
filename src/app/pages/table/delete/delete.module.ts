import { NgModule } from '@angular/core';
import {TableDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import { TableRoutingModule } from '../table-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BreadcrumbModule,
    TableRoutingModule,
    HttpClientModule,
    NbIconModule, 
    NbButtonModule,
    CommonModule
  ],
  declarations: [
    TableDeleteComponent,
  ],
})
export class TableDeleteModule { }
