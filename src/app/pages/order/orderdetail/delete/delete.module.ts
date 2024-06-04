import { NgModule } from '@angular/core';
import {OrderdetailDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import { HttpClientModule } from '@angular/common/http';
import {OrderdetailRoutingModule} from '../orderdetail-routing.module';

@NgModule({
  imports: [
    BreadcrumbModule,
    OrderdetailRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    OrderdetailDeleteComponent
  ],
})
export class OrderdetailDeleteModule { }
