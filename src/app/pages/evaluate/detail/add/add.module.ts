import { NgModule } from '@angular/core';
import {EvaluateDetailAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    EvaluateDetailAddComponent
  ],
})
export class EvaluateDetailAddModule { }
