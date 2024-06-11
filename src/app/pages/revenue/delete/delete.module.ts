import { NgModule } from '@angular/core';
import {RevenueDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { HttpClientModule } from '@angular/common/http';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    BreadcrumbModule,
    HttpClientModule,
    NbIconModule, 
    NbButtonModule,
    CommonModule
  ],
  declarations: [
    RevenueDeleteComponent
  ],
})
export class RevenueDeleteModule { }
