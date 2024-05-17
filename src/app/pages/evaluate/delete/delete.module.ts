import { NgModule } from '@angular/core';
import {EvaluateDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    EvaluateDeleteComponent
  ],
})
export class EvaluateDeleteModule { }