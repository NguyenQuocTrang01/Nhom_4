import { NgModule } from '@angular/core';
import {EvaluateAddComponent} from './add.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NbIconModule, NbButtonModule } from '@nebular/theme';
import { EvaluateRoutingModule } from '../evaluate-routing.module';

@NgModule({
  imports: [
    BreadcrumbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    NbIconModule, NbButtonModule,
    EvaluateRoutingModule
  ],
  declarations: [
    EvaluateAddComponent
  ],
})
export class EvaluateAddModule { }
