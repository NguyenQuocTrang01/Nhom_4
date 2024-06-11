import { NgModule } from '@angular/core';
import {ProductAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ProductRoutingModule } from '../product-routing.module';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProductRoutingModule,
    HttpClientModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    ProductAddComponent
  ],
})
export class ProductAddModule { }
