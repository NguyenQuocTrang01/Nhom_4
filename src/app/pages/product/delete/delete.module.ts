import { NgModule } from '@angular/core';
import {ProductDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { TableRoutingModule } from 'app/pages/table/table-routing.module';
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
    ProductDeleteComponent
  ],
})
export class ProductDeleteModule { }
