import { NgModule } from '@angular/core';
import {OrderDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    OrderDeleteComponent
  ],
})
export class OrderDeleteModule { }
