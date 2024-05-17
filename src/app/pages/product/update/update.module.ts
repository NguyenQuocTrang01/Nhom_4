import { NgModule } from '@angular/core';
import {ProductUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    ProductUpdateComponent
  ],
})
export class ProductUpdateModule { }
