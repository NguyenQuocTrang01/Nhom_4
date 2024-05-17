import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {CategoryComponent} from './category.component';
import {CategoryAddComponent} from "./add/add.component";
import {CategoryUpdateComponent} from "./update/update.component";
import {CategoryDeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
  },
  {
    path: 'add',
    component: CategoryAddComponent,
    data: {breadcrumb: 'Thêm'},
  },
  {
    path: 'update',
    component: CategoryUpdateComponent,
    data: {breadcrumb: 'Sửa'},
  },
  {
    path: 'delete',
    component: CategoryDeleteComponent,
    data: {breadcrumb: 'Xóa'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {
}