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
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { NbIconModule, NbButtonModule } from '@nebular/theme';

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
    FormsModule,
    ReactiveFormsModule,
    NbIconModule, 
    NbButtonModule
  ],
  declarations: [
    OrderComponent
  ],
})
export class OrderModule { }
