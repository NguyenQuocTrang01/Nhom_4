import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {TableComponent} from './table.component';
import {TableAddComponent} from "./add/add.component";
import {TableUpdateComponent} from "./update/update.component";
import {TableDeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: '',
    component: TableComponent,
  },
  {
    path: 'add',
    component: TableAddComponent,
    data: {breadcrumb: 'Thêm'},
  },
  {
    path: 'update',
    component: TableUpdateComponent,
    data: {breadcrumb: 'Sửa'},
  },
  {
    path: 'delete',
    component: TableDeleteComponent,
    data: {breadcrumb: 'Xóa'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableRoutingModule {
}