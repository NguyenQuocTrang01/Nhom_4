import { NgModule } from '@angular/core';
import {RevenueDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    RevenueDeleteComponent
  ],
})
export class RevenueDeleteModule { }
