import { NgModule } from '@angular/core';
import {TableDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import { TableRoutingModule } from '../table-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BreadcrumbModule,
    TableRoutingModule,
    HttpClientModule
  ],
  declarations: [
    TableDeleteComponent,
  ],
})
export class TableDeleteModule { }
