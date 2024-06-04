import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { Orderdetail } from '../../interfaces/orderdetail.interface';

@Injectable({
  providedIn: 'root'
})

export class OrderdetailService {

  constructor (private http : HttpClient) { }

  getOrderdetail (id : any) : Observable <any> {
    return this.http.get (API_ENDPOINT.orderdetail.base + '/' + id) ;
  }

  getOrderdetailByID (id : any): Observable <any> {
    return this.http.get (API_ENDPOINT.orderdetail.baseAdd + '/' + id) ;  
  } 

  createOrderdetail (orderdetail : Orderdetail): Observable <any> {
    return this.http.post (API_ENDPOINT.orderdetail.baseAdd , orderdetail) ;  
  } 

  updateOrderdetail (id : any , orderdetail : Orderdetail): Observable <any> {
    return this.http.put (API_ENDPOINT.orderdetail.baseAdd + '/' +id , orderdetail) ;  
  }

  deleteOrderdetail (id : any): Observable <any> {
    return this.http.delete (API_ENDPOINT.orderdetail.baseAdd + '/' +id) ;  
  }

  deleteOrderdetailByIdOrder (id : any) : Observable <any> {
    return this.http.delete (API_ENDPOINT.orderdetail.deleteByOrderID + '/' + id) ;
  }

  getProduct () : Observable <any> {
    return this.http.get (API_ENDPOINT.product.base) ;
  }

  getProductByID (id : any) : Observable <any> {
    return this.http.get (API_ENDPOINT.product.base + '/' + id) ;
  }

}
