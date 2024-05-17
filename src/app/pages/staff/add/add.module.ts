import { NgModule } from '@angular/core';
import {StaffAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    StaffAddComponent
  ],
})
export class StaffAddModule { }
