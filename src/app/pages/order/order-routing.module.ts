import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {OrderComponent} from './order.component';
import {OrderAddComponent} from "./add/add.component";
import {OrderUpdateComponent} from "./update/update.component";
import {OrderDeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
  },
  {
    path: 'add',
    component: OrderAddComponent,
    data: {breadcrumb: 'Thêm'},
  },
  {
    path: 'update/:id',
    component: OrderUpdateComponent,
    data: {breadcrumb: 'Sửa'},
  },
  {
    path: 'delete/:id',
    component: OrderDeleteComponent,
    data: {breadcrumb: 'Xóa'},
  },
  {
    path: 'detail',
    loadChildren: () => import('./orderdetail/orderdetail.module')
      .then(m => m.OrderdetailModule),
    data: {breadcrumb: 'Chi tiết'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderRoutingModule {
}