import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    OrderUpdateComponent
  ],
})
export class OrderUpdateModule { }
