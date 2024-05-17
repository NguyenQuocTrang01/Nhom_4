import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
      data: {breadcrumb: 'Dashboard'},
    },
    {
      path: 'customer',
      loadChildren: () => import('./customer/customer.module')
        .then(m => m.CustomerModule),
      data: {breadcrumb: 'Quản lý khách hàng'},
    },
    {
      path: 'staff',
      loadChildren: () => import('./staff/staff.module')
        .then(m => m.StaffModule),
      data: {breadcrumb: 'Quản lý nhân viên'},
    },
    {
      path: 'product',
      loadChildren: () => import('./product/product.module')
        .then(m => m.ProductModule),
      data: {breadcrumb: 'Quản lý sản phẩm'},
    },
    {
      path: 'category',
      loadChildren: () => import('./category/category.module')
        .then(m => m.CategoryModule),
      data: {breadcrumb: 'Quản lý danh mục'},
    },
    {
      path: 'order',
      loadChildren: () => import('./order/order.module')
        .then(m => m.OrderModule),
      data: {breadcrumb: 'Quản lý hóa đơn'},
    },
    {
      path: 'revenue',
      loadChildren: () => import('./revenue/revenue.module')
        .then(m => m.RevenueModule),
      data: {breadcrumb: 'Quản lý doanh thu'},
    },
    {
      path: 'evaluate',
      loadChildren: () => import('./evaluate/evaluate.module')
        .then(m => m.EvaluateModule),
      data: {breadcrumb: 'Quản lý đánh giá'},
    },
    {
      path: 'table',
      loadChildren: () => import('./table/table.module')
        .then(m => m.TableModule),
      data: {breadcrumb: 'Quản lý bàn'},
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
