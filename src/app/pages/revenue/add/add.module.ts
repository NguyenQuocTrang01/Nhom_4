import { NgModule } from '@angular/core';
import {RevenueAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    RevenueAddComponent
  ],
})
export class RevenueAddModule { }
