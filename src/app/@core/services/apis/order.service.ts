import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { Order } from '../../interfaces/order.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor (private http : HttpClient) { }

  getOrder () : Observable <any> {
    return this.http.get (API_ENDPOINT.order.base) ;
  }

  getOrderById (id: any) : Observable <any> {
    return this.http.get (API_ENDPOINT.order.base + '/' + id) ;
  }

  createOrder (order : Order): Observable <any> {
    return this.http.post (API_ENDPOINT.order.base , order) ;  
  } 

  updateOrder (id : any , order : Order) : Observable <any> {
    return this.http.put (API_ENDPOINT.order.base + '/' + id , order) ;
  }

  deleteOrder (id : any) : Observable <any> {
    return this.http.delete (API_ENDPOINT.order.base + '/' + id) ;
  }

  getCustomer () : Observable <any> {
    return this.http.get (API_ENDPOINT.customer.base) ;
  }

  getProduct () : Observable <any> {
    return this.http.get (API_ENDPOINT.product.base) ;
  }

}
