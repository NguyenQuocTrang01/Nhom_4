import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { StaffAddComponent } from './add/add.component';
import { StaffUpdateComponent } from './update/update.component';
import { StaffDeleteComponent } from './delete/delete.component';
import { BreadcrumbModule } from 'xng-breadcrumb';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StaffComponent,
    StaffAddComponent,
    StaffUpdateComponent,
    StaffDeleteComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    BreadcrumbModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class StaffModule {}
