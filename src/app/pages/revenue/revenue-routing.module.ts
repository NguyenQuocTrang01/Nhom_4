import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {RevenueComponent} from './revenue.component';
import {RevenueAddComponent} from "./add/add.component";
import {RevenueUpdateComponent} from "./update/update.component";
import {RevenueDeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: '',
    component: RevenueComponent,
  },
  {
    path: 'add',
    component: RevenueAddComponent,
    data: {breadcrumb: 'Thêm'},
  },
  {
    path: 'update',
    component: RevenueUpdateComponent,
    data: {breadcrumb: 'Sửa'},
  },
  {
    path: 'delete',
    component: RevenueDeleteComponent,
    data: {breadcrumb: 'Xóa'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RevenueRoutingModule {
}