import { NgModule } from '@angular/core';
import {CategoryAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    CategoryAddComponent
  ],
})
export class CategoryAddModule { }
