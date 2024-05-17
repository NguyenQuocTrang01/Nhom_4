import { NgModule } from '@angular/core';
import {CategoryAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    CategoryAddComponent
  ],
})
export class CategoryAddModule { }
