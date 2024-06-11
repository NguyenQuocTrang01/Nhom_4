import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { Product } from '../../interfaces/product.interface';

@Injectable({
    providedIn: 'root'
  })
  
  export class ProductService {
  
    constructor (private http : HttpClient) { }
  
    getProduct () : Observable <any> {
      return this.http.get (API_ENDPOINT.product.base) ;
    }
  
    getProductById (id: any) : Observable <any> {
      return this.http.get (API_ENDPOINT.product.base + '/' + id) ;
    }
  
    createProduct (product : Product) : Observable <any> {
      return this.http.post (API_ENDPOINT.product.base , product) ;
    }
  
    updateProduct (id : any , product : Product) : Observable <any> {
      return this.http.put (API_ENDPOINT.product.base + '/' + id , product) ;
    }
  
    deleteProduct (id : any) : Observable <any> {
      return this.http.delete (API_ENDPOINT.product.base + '/' + id) ;
    }
  
  }