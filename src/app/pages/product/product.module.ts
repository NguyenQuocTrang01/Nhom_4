import { NgModule } from '@angular/core';
import {ProductComponent} from './product.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {ProductRoutingModule} from './product-routing.module';
import {ProductAddModule} from './add/add.module';
import {ProductUpdateModule} from './update/update.module';
import {ProductDeleteModule} from './delete/delete.module';


@NgModule({
  imports: [
    ProductRoutingModule,
    ProductAddModule,
    ProductUpdateModule,
    ProductDeleteModule,
    BreadcrumbModule
  ],
  declarations: [
    ProductComponent
  ],
})
export class ProductModule { }
