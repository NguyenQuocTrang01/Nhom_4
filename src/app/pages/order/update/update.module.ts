import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { OrderRoutingModule } from '../order-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    OrderRoutingModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    OrderUpdateComponent
  ],
})
export class OrderUpdateModule { }
