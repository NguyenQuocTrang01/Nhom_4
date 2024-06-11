import { NgModule } from '@angular/core';
import {EvaluateDeleteComponent} from './delete.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EvaluateRoutingModule } from '../evaluate-routing.module';
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    HttpClientModule,
    CommonModule,
    EvaluateRoutingModule,
    NbIconModule, 
    NbButtonModule,
  ],
  declarations: [
    EvaluateDeleteComponent
  ],
})
export class EvaluateDeleteModule { }
