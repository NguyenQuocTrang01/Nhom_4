import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderAddComponent } from './add.component';
import { BreadcrumbModule } from "xng-breadcrumb";
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  declarations: [
    OrderAddComponent
  ],
})
export class OrderAddModule { }
