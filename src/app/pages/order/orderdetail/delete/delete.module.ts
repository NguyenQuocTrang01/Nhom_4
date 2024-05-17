import { NgModule } from '@angular/core';
import {OrderdetailDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    OrderdetailDeleteComponent
  ],
})
export class OrderdetailDeleteModule { }
