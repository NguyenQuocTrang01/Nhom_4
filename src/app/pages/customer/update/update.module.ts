import { NgModule } from '@angular/core';
import {CustomerUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    CustomerUpdateComponent
  ],
})
export class CustomerUpdateModule { }
