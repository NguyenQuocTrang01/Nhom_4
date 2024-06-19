import { NgModule } from '@angular/core';
import {EvaluateUpdateComponent} from './update.component';
import {BreadcrumbModule} from "xng-breadcrumb";
import { CommonModule } from '@angular/common';

import { FormsModule , ReactiveFormsModule } from '@angular/forms'
import { NbIconModule, NbButtonModule } from '@nebular/theme';

@NgModule({
  imports: [
    BreadcrumbModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NbIconModule, NbButtonModule
  ],
  declarations: [
    EvaluateUpdateComponent
  ],
})
export class EvaluateUpdateModule { }
