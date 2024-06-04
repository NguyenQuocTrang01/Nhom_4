import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {OrderdetailComponent} from './orderdetail.component';
import {OrderdetailAddComponent} from "./add/add.component";
import {OrderdetailUpdateComponent} from "./update/update.component";
import {OrderdetailDeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: ':id',
    component: OrderdetailComponent,
  },
  {
    path: 'de/add',
    component: OrderdetailAddComponent,
    data: {breadcrumb: 'Thêm'},
  },
  {
    path: 'de/update/:id',
    component: OrderdetailUpdateComponent,
    data: {breadcrumb: 'Sửa'},
  },
  {
    path: 'de/delete/:id',
    component: OrderdetailDeleteComponent,
    data: {breadcrumb: 'Xóa'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderdetailRoutingModule {
}