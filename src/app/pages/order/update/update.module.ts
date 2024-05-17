import { NgModule } from '@angular/core';
import {OrderUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    OrderUpdateComponent
  ],
})
export class OrderUpdateModule { }
