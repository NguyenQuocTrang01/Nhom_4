import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {EvaluateComponent} from './evaluate.component';
import {EvaluateAddComponent} from "./add/add.component";
import {EvaluateDeleteComponent} from "./delete/delete.component";
import { EvaluateUpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path: '',
    component: EvaluateComponent,
  },
  {
    path: 'add',
    component: EvaluateAddComponent,
    data: {breadcrumb: 'Thêm'},
  },
  {
    path: 'delete/:id',
    component: EvaluateDeleteComponent,
    data: {breadcrumb: 'Xóa'},
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module')
      .then(m => m.EvaluateDetailModule),
    data: {breadcrumb: 'Chi tiết'},
  },
  {
    path: 'update/:id',
    component: EvaluateUpdateComponent,
    data: {breadcrumb: 'Sửa'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvaluateRoutingModule {
}