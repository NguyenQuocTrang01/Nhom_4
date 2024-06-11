import { NgModule } from '@angular/core';
import {CategoryComponent} from './category.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryAddModule} from './add/add.module';
import {CategoryUpdateModule} from './update/update.module';
import {CategoryDeleteModule} from './delete/delete.module';

import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    CategoryRoutingModule,
    CategoryAddModule,
    CategoryUpdateModule,
    CategoryDeleteModule,
    BreadcrumbModule,
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    CategoryComponent
  ],
})
export class CategoryModule { }
