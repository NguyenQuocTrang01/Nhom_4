import { NgModule } from '@angular/core';
import {StaffDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    StaffDeleteComponent
  ],
})
export class StaffDeleteModule { }
