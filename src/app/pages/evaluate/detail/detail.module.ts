import { NgModule } from '@angular/core';
import {EvaluateDetailComponent} from './detail.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {DetailRoutingModule} from './detail-routing.module';
import {EvaluateDetailAddModule} from './add/add.module';
import {EvaluateDetailDeleteModule} from './delete/delete.module';

@NgModule({
  imports: [
    DetailRoutingModule,
    EvaluateDetailDeleteModule,
    EvaluateDetailAddModule,
    BreadcrumbModule
  ],
  declarations: [
    EvaluateDetailComponent
  ],
})
export class EvaluateDetailModule { }
