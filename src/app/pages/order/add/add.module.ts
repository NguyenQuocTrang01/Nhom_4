import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderAddComponent } from './add.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from '../order-routing.module';

import { HttpClientModule } from '@angular/common/http';
import {OrderdetailRoutingModule} from '../orderdetail/orderdetail-routing.module';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    OrderRoutingModule,
    OrderdetailRoutingModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    OrderAddComponent
  ],
})
export class OrderAddModule { }
