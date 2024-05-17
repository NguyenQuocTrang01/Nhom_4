import { NgModule } from '@angular/core';
import {CategoryUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    CategoryUpdateComponent
  ],
})
export class CategoryUpdateModule { }
