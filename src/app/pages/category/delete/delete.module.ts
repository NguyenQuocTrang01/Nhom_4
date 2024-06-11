import { NgModule } from '@angular/core';
import {CategoryDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import { HttpClientModule } from '@angular/common/http';
import { TableRoutingModule } from 'app/pages/table/table-routing.module';
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
    CategoryDeleteComponent
  ],
})
export class CategoryDeleteModule { }
