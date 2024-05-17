import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    group: true,
  },
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
  },
  {
    title: 'Quản lý khách hàng',
    icon: 'grid-outline',
    link: '/pages/customer',
  },
  {
    title: 'Quản lý nhân viên',
    icon: 'grid-outline',
    link: '/pages/staff',
  },
  {
    title: 'Quản lý danh mục',
    icon: 'grid-outline',
    link: '/pages/category',
  },
  {
    title: 'Quản lý sản phẩm',
    icon: 'grid-outline',
    link: '/pages/product',
  },
  {
    title: 'Quản lý đánh giá',
    icon: 'grid-outline',
    link: '/pages/evaluate',
  },
  {
    title: 'Quản lý hóa đơn',
    icon: 'grid-outline',
    link: '/pages/order',
  },
  {
    title: 'Quản lý bàn',
    icon: 'grid-outline',
    link: '/pages/table',
  },
  {
    title: 'Quản lý doanh thu',
    icon: 'grid-outline',
    link: '/pages/revenue',
  },
];
