import { NgModule } from '@angular/core';
import {RevenueAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    RevenueAddComponent
  ],
})
export class RevenueAddModule { }
