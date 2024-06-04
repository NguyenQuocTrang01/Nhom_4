import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderdetailAddComponent} from './add.component';
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
    HttpClientModule,
    OrderdetailRoutingModule,
  ],
  declarations: [
    OrderdetailAddComponent
  ],
})
export class OrderdetailAddModule { }
