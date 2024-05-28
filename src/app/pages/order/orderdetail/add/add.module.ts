import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderdetailAddComponent} from './add.component';
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
    OrderdetailAddComponent
  ],
})
export class OrderdetailAddModule { }
