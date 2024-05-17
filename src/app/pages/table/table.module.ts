import { NgModule } from '@angular/core';
import {TableComponent} from './table.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {TableRoutingModule} from './table-routing.module';
import {TableAddModule} from './add/add.module';
import {TableUpdateModule} from './update/update.module';
import {TableDeleteModule} from './delete/delete.module';


@NgModule({
  imports: [
    TableRoutingModule,
    TableAddModule,
    TableUpdateModule,
    TableDeleteModule,
    BreadcrumbModule
  ],
  declarations: [
    TableComponent,
  ],
})
export class TableModule { }
