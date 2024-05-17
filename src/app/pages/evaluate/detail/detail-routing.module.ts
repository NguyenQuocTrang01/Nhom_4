import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {EvaluateDetailComponent} from './detail.component';
import {EvaluateDetailAddComponent} from "./add/add.component";
import {EvaluateDetailDeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: '',
    component: EvaluateDetailComponent,
  },
  {
    path: 'add',
    component: EvaluateDetailAddComponent,
    data: {breadcrumb: 'Thêm'},
  },
  {
    path: 'delete',
    component: EvaluateDetailDeleteComponent,
    data: {breadcrumb: 'Xóa'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailRoutingModule {
}