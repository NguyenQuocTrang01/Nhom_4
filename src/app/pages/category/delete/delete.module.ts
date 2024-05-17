import { NgModule } from '@angular/core';
import {CategoryDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    CategoryDeleteComponent
  ],
})
export class CategoryDeleteModule { }
