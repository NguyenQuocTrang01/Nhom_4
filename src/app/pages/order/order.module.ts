import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderAddComponent } from './add/add.component';
import { OrderUpdateComponent } from './update/update.component';
import { OrderDeleteComponent } from './delete/delete.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    OrderRoutingModule,
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
    OrderComponent,
    OrderDeleteComponent,
    OrderUpdateComponent,
    OrderAddComponent,
  ],
})
export class OrderModule { }
