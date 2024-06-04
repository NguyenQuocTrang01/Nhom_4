import { NgModule } from '@angular/core';
import {OrderdetailUpdateComponent} from './update.component';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {BreadcrumbModule} from "xng-breadcrumb";

import { HttpClientModule } from '@angular/common/http';
import {OrderdetailRoutingModule} from '../orderdetail-routing.module';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    OrderdetailRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    OrderdetailUpdateComponent
  ],
})
export class OrderdetailUpdateModule { }
