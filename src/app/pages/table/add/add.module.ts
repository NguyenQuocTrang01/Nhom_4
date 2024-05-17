import { NgModule } from '@angular/core';
import {TableAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    TableAddComponent,
  ],
})
export class TableAddModule { }
