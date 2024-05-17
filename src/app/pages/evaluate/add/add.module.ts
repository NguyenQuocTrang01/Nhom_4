import { NgModule } from '@angular/core';
import {EvaluateAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
@NgModule({
  imports: [
    BreadcrumbModule
  ],
  declarations: [
    EvaluateAddComponent
  ],
})
export class EvaluateAddModule { }
