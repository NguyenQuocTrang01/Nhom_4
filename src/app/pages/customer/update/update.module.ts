import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from "xng-breadcrumb";
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { CustomerRoutingModule } from '../customer-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomerUpdateComponent } from './update.component';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    CustomerUpdateComponent,
  ],
})
export class CustomerUpdateModule { }
