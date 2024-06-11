import { NgModule } from '@angular/core';
import {CategoryUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryRoutingModule } from '../category-routing.module';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CategoryRoutingModule,
    HttpClientModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    CategoryUpdateComponent
  ],
})
export class CategoryUpdateModule { }
