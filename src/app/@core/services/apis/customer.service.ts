import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { Customer } from 'app/@core/interfaces/customer.interface';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  constructor (private http : HttpClient) { }

  getCustomer () : Observable <any> {
    return this.http.get (API_ENDPOINT.customer.base) ;
  }

  getCustomerTableById (id: any) : Observable <any> {
    return this.http.get (API_ENDPOINT.customer.base + '/' + id) ;
  }

  createCustomer (customer : Customer) : Observable <any> {
    return this.http.post (API_ENDPOINT.customer.base ,customer ) ;
  }

  updateCustomer (id : any , customer: Customer) : Observable <any> {
    return this.http.put (API_ENDPOINT.customer.base + '/' + id , customer) ;
  }

  deleteCustomer (id : any) : Observable <any> {
    return this.http.delete (API_ENDPOINT.customer.base + '/' + id) ;
  }

}
