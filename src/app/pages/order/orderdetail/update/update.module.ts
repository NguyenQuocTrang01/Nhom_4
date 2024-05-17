import { NgModule } from '@angular/core';
import {OrderdetailUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    OrderdetailUpdateComponent
  ],
})
export class OrderdetailUpdateModule { }
