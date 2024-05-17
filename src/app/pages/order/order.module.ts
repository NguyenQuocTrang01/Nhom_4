import { NgModule } from '@angular/core';
import {OrderComponent} from './order.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {OrderRoutingModule} from './order-routing.module';
import {OrderAddModule} from './add/add.module';
import {OrderUpdateModule} from './update/update.module';
import {OrderDeleteModule} from './delete/delete.module';

@NgModule({
  imports: [
    OrderRoutingModule,
    OrderAddModule,
    OrderUpdateModule,
    OrderDeleteModule,
    BreadcrumbModule
  ],
  declarations: [
    OrderComponent
  ],
})
export class OrderModule { }
