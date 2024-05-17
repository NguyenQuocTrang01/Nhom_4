import { NgModule } from '@angular/core';
import {CustomerDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    CustomerDeleteComponent
  ],
})
export class CustomerDeleteModule { }
