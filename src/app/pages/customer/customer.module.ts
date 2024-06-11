import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerAddModule } from './add/add.module';
import { CustomerUpdateModule } from './update/update.module';
import { CustomerDeleteModule } from './delete/delete.module';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    CustomerRoutingModule,
    BreadcrumbModule,
    RouterModule,
    CustomerAddModule,
    CustomerUpdateModule,
    CustomerDeleteModule,
    CommonModule,
    NgxPaginationModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    CustomerComponent,
  ],
})

export class CustomerModule { }
