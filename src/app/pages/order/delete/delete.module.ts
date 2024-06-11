import { NgModule } from '@angular/core';
import { OrderDeleteComponent } from './delete.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { OrderRoutingModule } from '../order-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BreadcrumbModule,
    HttpClientModule,
    OrderRoutingModule,
    NbIconModule, NbButtonModule,
    CommonModule
  ],
  declarations: [
    OrderDeleteComponent
  ],
})

export class OrderDeleteModule { }
