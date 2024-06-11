import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {CustomerComponent} from './customer.component';
import {CustomerAddComponent} from "./add/add.component";
import {CustomerUpdateComponent} from "./update/update.component";
import {CustomerDeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
  },
  {
    path: 'add',
    component: CustomerAddComponent,
    data: {breadcrumb: 'Thêm'},
  },
  {
    path: 'update/:id',
    component: CustomerUpdateComponent,
    data: {breadcrumb: 'Sửa'},
  },
  {
    path: 'delete/:id',
    component: CustomerDeleteComponent,
    data: {breadcrumb: 'Xóa'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {
}
