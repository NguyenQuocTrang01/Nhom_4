import { NgModule } from '@angular/core';
import {RevenueUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    RevenueUpdateComponent
  ],
})
export class RevenueUpdateModule { }
