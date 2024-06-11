import { NgModule } from '@angular/core';
import {ProductUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableRoutingModule } from 'app/pages/table/table-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    TableRoutingModule,
    HttpClientModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    ProductUpdateComponent
  ],
})
export class ProductUpdateModule { }
