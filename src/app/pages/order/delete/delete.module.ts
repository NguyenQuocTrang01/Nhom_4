import { NgModule } from '@angular/core';
import { OrderDeleteComponent } from './delete.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { OrderRoutingModule } from '../order-routing.module';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BreadcrumbModule,
    HttpClientModule,
    OrderRoutingModule,
  ],
  declarations: [
    OrderDeleteComponent
  ],
})

export class OrderDeleteModule { }
