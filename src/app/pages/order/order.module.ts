import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderAddModule } from './add/add.module';
import { OrderUpdateModule } from './update/update.module';
import { OrderDeleteModule } from './delete/delete.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    OrderRoutingModule,
    OrderAddModule,
    OrderUpdateModule,
    OrderDeleteModule,
    BreadcrumbModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
  ],
  declarations: [
    OrderComponent
  ],
})
export class OrderModule { }
