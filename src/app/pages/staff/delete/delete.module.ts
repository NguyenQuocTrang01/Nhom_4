import { NgModule } from '@angular/core';
import {BreadcrumbModule} from "xng-breadcrumb";
import { HttpClientModule } from '@angular/common/http';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { StaffDeleteComponent } from './delete.component';
import { StaffRoutingModule } from '../staff-routing.module';

@NgModule({
  imports: [
    BreadcrumbModule,
    StaffRoutingModule,
    HttpClientModule,
    NbIconModule, 
    NbButtonModule,
    CommonModule
  ],
  declarations: [
    StaffDeleteComponent,
  ],
})

export class StaffDeleteModule { }
