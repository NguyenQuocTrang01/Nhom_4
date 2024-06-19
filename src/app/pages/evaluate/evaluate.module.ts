import { NgModule } from '@angular/core';
import {EvaluateComponent} from './evaluate.component';
import {BreadcrumbModule} from "xng-breadcrumb";

import {EvaluateRoutingModule} from './evaluate-routing.module';
import {EvaluateAddModule} from './add/add.module';
import {EvaluateDeleteModule} from './delete/delete.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { EvaluateUpdateModule } from './update/update.module';


@NgModule({
  imports: [
    EvaluateRoutingModule,
    EvaluateAddModule,
    EvaluateDeleteModule,
    EvaluateUpdateModule,
    BreadcrumbModule,
    CommonModule,
    FormsModule,
    BreadcrumbModule,
    HttpClientModule,
    NgxPaginationModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    EvaluateComponent,
    
  ],
})
export class EvaluateModule { }
