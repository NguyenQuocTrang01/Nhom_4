import { NgModule } from '@angular/core';
import {CategoryComponent} from './category.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryAddModule} from './add/add.module';
import {CategoryUpdateModule} from './update/update.module';
import {CategoryDeleteModule} from './delete/delete.module';

@NgModule({
  imports: [
    CategoryRoutingModule,
    CategoryAddModule,
    CategoryUpdateModule,
    CategoryDeleteModule,
    BreadcrumbModule
  ],
  declarations: [
    CategoryComponent
  ],
})
export class CategoryModule { }
