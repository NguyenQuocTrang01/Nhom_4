import { NgModule } from '@angular/core';
import {CustomerDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { CustomerRoutingModule } from '../customer-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    BreadcrumbModule,
    CustomerRoutingModule,
    HttpClientModule,
    NbIconModule, 
    NbButtonModule,
    CommonModule
  ],
  declarations: [
    CustomerDeleteComponent,
  ],
})

export class CustomerDeleteModule { }
