import { NgModule } from '@angular/core';
import {RevenueComponent} from './revenue.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {RevenueRoutingModule} from './revenue-routing.module';
import {RevenueAddModule} from './add/add.module';
import {RevenueUpdateModule} from './update/update.module';
import {RevenueDeleteModule} from './delete/delete.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    RevenueRoutingModule,
    RevenueAddModule,
    RevenueUpdateModule,
    RevenueDeleteModule,
    BreadcrumbModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    CommonModule,
    ReactiveFormsModule,
    NbIconModule, NbButtonModule 
  ],
  declarations: [
    RevenueComponent
  ],
})
export class RevenueModule { }
