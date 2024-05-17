import { NgModule } from '@angular/core';
import {OrderdetailComponent} from './orderdetail.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {OrderdetailRoutingModule} from './orderdetail-routing.module';
import {OrderdetailAddModule} from './add/add.module';
import {OrderdetailUpdateModule} from './update/update.module';
import {OrderdetailDeleteModule} from './delete/delete.module';

@NgModule({
  imports: [
    OrderdetailRoutingModule,
    OrderdetailAddModule,
    OrderdetailUpdateModule,
    OrderdetailDeleteModule,
    BreadcrumbModule
  ],
  declarations: [
    OrderdetailComponent
  ],
})
export class OrderdetailModule { }
