import { NgModule } from '@angular/core';
import { OrderdetailComponent } from './orderdetail.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { CommonModule } from '@angular/common';

import { OrderdetailRoutingModule } from './orderdetail-routing.module';
import { OrderdetailAddModule } from './add/add.module';
import { OrderdetailUpdateModule } from './update/update.module';
import { OrderdetailDeleteModule } from './delete/delete.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    OrderdetailRoutingModule,
    OrderdetailAddModule,
    OrderdetailUpdateModule,
    OrderdetailDeleteModule,
    BreadcrumbModule,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    OrderdetailComponent
  ],
})
export class OrderdetailModule { }
