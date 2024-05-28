import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableUpdateComponent} from './update.component';
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
    TableUpdateComponent,
  ],
})
export class TableUpdateModule { }
