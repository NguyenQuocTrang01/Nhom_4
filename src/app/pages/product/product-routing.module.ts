import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {ProductComponent} from './product.component';
import {ProductAddComponent} from "./add/add.component";
import {ProductUpdateComponent} from "./update/update.component";
import {ProductDeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },
  {
    path: 'add',
    component: ProductAddComponent,
    data: {breadcrumb: 'Thêm'},
  },
  {
    path: 'update/:id',
    component: ProductUpdateComponent,
    data: {breadcrumb: 'Sửa'},
  },
  {
    path: 'delete/:id',
    component: ProductDeleteComponent,
    data: {breadcrumb: 'Xóa'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {
}