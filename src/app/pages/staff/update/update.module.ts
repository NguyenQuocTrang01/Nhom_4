import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from "xng-breadcrumb";
import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { StaffUpdateComponent } from './update.component';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { StaffRoutingModule } from '../staff-routing.module';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StaffRoutingModule,
    HttpClientModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    StaffUpdateComponent,
  ],
})
export class StaffUpdateModule { }
