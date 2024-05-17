import { NgModule } from '@angular/core';
import {StaffUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    StaffUpdateComponent
  ],
})
export class StaffUpdateModule { }
