import { NgModule } from '@angular/core';
import { OrderdetailComponent } from './orderdetail.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { CommonModule } from '@angular/common';

import { OrderdetailRoutingModule } from './orderdetail-routing.module';
import { OrderdetailAddComponent } from './add/add.component';
import { OrderdetailUpdateComponent } from './update/update.component';
import { OrderdetailDeleteComponent } from './delete/delete.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    OrderdetailRoutingModule,
    BreadcrumbModule,
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    OrderdetailComponent,
    OrderdetailAddComponent,
    OrderdetailUpdateComponent,
    OrderdetailDeleteComponent
  ],
})
export class OrderdetailModule { }
