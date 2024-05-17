import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {CustomerComponent} from './customer.component';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerAddModule} from './add/add.module';
import {CustomerUpdateModule} from './update/update.module';
import {CustomerDeleteModule} from './delete/delete.module';
import {BreadcrumbModule} from "xng-breadcrumb";

@NgModule({
  imports: [
    CustomerRoutingModule,
    BreadcrumbModule,
    RouterModule,
    CustomerAddModule,
    CustomerUpdateModule,
    CustomerDeleteModule,
  ],
  declarations: [
    CustomerComponent
  ],
})

export class CustomerModule { }
