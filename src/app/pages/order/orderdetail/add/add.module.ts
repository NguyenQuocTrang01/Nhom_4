import { NgModule } from '@angular/core';
import {OrderdetailAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    OrderdetailAddComponent
  ],
})
export class OrderdetailAddModule { }
