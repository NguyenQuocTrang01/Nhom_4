import { NgModule } from '@angular/core';
import {OrderdetailDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import { HttpClientModule } from '@angular/common/http';
import {OrderdetailRoutingModule} from '../orderdetail-routing.module';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BreadcrumbModule,
    OrderdetailRoutingModule,
    HttpClientModule,
    NbIconModule, NbButtonModule,
    CommonModule
  ],
  declarations: [
    OrderdetailDeleteComponent
  ],
})
export class OrderdetailDeleteModule { }
