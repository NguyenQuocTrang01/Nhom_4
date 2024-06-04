import {APP_CONFIG} from "./app.config";
import {IAPIEndpoint} from "../interfaces";

export const API_BASE_URL = APP_CONFIG.apiBaseUrl;

export const API_ENDPOINT: IAPIEndpoint = {
  auth: {
    base: API_BASE_URL + '/' + 'auth',
    login: '/auth/login',
    logout: '/auth/logout',
  },
  order: {
    base: API_BASE_URL + '/api/' + 'orders',
  },
  customer: {
    base: API_BASE_URL + '/api/' + 'customers',
  },
  orderdetail: {
    base: API_BASE_URL + '/api/' + 'orderdetails/getOrderID',
    baseAdd: API_BASE_URL + '/api/' + 'orderdetails',
    deleteByOrderID: API_BASE_URL + '/api/' + 'orderdetails/order_id',
  },
  product: {
    base: API_BASE_URL + '/api/' + 'products',
  },
  table: {
    base: API_BASE_URL + '/api/' + 'table',
  }
};
