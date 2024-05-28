import { NgModule } from '@angular/core';
import {OrderdetailUpdateComponent} from './update.component';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {BreadcrumbModule} from "xng-breadcrumb";

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    OrderdetailUpdateComponent
  ],
})
export class OrderdetailUpdateModule { }
