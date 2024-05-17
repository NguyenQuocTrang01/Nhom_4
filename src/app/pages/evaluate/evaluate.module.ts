import { NgModule } from '@angular/core';
import {EvaluateComponent} from './evaluate.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {EvaluateRoutingModule} from './evaluate-routing.module';
import {EvaluateAddModule} from './add/add.module';
import {EvaluateDeleteModule} from './delete/delete.module';

@NgModule({
  imports: [
    EvaluateRoutingModule,
    EvaluateAddModule,
    EvaluateDeleteModule,
    BreadcrumbModule
  ],
  declarations: [
    EvaluateComponent
  ],
})
export class EvaluateModule { }
