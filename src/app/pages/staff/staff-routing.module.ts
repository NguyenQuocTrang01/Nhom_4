import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {StaffComponent} from './staff.component';
import {StaffAddComponent} from "./add/add.component";
import {StaffUpdateComponent} from "./update/update.component";
import {StaffDeleteComponent} from "./delete/delete.component";

const routes: Routes = [
  {
    path: '',
    component: StaffComponent,
  },
  {
    path: 'add',
    component: StaffAddComponent,
    data: {breadcrumb: 'Thêm'},
  },
  {
    path: 'update',
    component: StaffUpdateComponent,
    data: {breadcrumb: 'Sửa'},
  },
  {
    path: 'delete',
    component: StaffDeleteComponent,
    data: {breadcrumb: 'Xóa'},
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {
}