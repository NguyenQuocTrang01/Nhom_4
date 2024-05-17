import { NgModule } from '@angular/core';
import {TableUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";

@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    TableUpdateComponent,
  ],
})
export class TableUpdateModule { }
