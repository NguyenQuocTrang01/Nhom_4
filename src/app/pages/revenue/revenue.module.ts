import { NgModule } from '@angular/core';
import {RevenueComponent} from './revenue.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {RevenueRoutingModule} from './revenue-routing.module';
import {RevenueAddModule} from './add/add.module';
import {RevenueUpdateModule} from './update/update.module';
import {RevenueDeleteModule} from './delete/delete.module';

@NgModule({
  imports: [
    RevenueRoutingModule,
    RevenueAddModule,
    RevenueUpdateModule,
    RevenueDeleteModule,
    BreadcrumbModule
  ],
  declarations: [
    RevenueComponent
  ],
})
export class RevenueModule { }
