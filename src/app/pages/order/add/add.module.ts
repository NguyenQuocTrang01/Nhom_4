import { NgModule } from '@angular/core';
import {OrderAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    OrderAddComponent
  ],
})
export class OrderAddModule { }
