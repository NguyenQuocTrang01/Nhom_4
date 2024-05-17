import { NgModule } from '@angular/core';
import {CustomerAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    CustomerAddComponent
  ],
})
export class CustomerAddModule { }
