import { NgModule } from '@angular/core';
import {TableDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";

@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    TableDeleteComponent,
  ],
})
export class TableDeleteModule { }
