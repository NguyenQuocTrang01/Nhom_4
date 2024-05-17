import { NgModule } from '@angular/core';
import {ProductAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    ProductAddComponent
  ],
})
export class ProductAddModule { }
