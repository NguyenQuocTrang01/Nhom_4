import { NgModule } from '@angular/core';
import {ProductDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    ProductDeleteComponent
  ],
})
export class ProductDeleteModule { }
