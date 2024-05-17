import { NgModule } from '@angular/core';

import {StaffComponent} from './staff.component';

import {StaffRoutingModule} from './staff-routing.module';
import {StaffAddModule} from './add/add.module';
import {StaffUpdateModule} from './update/update.module';
import {StaffDeleteModule} from './delete/delete.module';
import {BreadcrumbModule} from "xng-breadcrumb";

@NgModule({
  imports: [
    StaffRoutingModule,
    BreadcrumbModule,
    StaffAddModule,
    StaffUpdateModule,
    StaffDeleteModule,
  ],
  declarations: [
    StaffComponent
  ],
})
export class StaffModule { }
