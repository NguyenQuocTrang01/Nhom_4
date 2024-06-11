import { NgModule } from '@angular/core';
import {ProductComponent} from './product.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {ProductRoutingModule} from './product-routing.module';
import {ProductAddModule} from './add/add.module';
import {ProductUpdateModule} from './update/update.module';
import {ProductDeleteModule} from './delete/delete.module';

import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    ProductRoutingModule,
    ProductAddModule,
    ProductUpdateModule,
    ProductDeleteModule,
    BreadcrumbModule,
    CommonModule,
    NgxPaginationModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    ProductComponent
  ],
})
export class ProductModule { }
