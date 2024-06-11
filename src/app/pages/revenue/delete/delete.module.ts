import { NgModule } from '@angular/core';
import {RevenueDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { TableAddModule } from 'app/pages/table/add/add.module';
import { HttpClientModule } from '@angular/common/http';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    BreadcrumbModule,
    TableAddModule,
    HttpClientModule,
    NbIconModule, 
    NbButtonModule,
    CommonModule
  ],
  declarations: [
    RevenueDeleteComponent
  ],
})
export class RevenueDeleteModule { }
