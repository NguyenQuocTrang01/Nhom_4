import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { Category } from '../../interfaces/category.interface';

@Injectable({
    providedIn: 'root'
  })
  
  export class CategoryService {
  
    constructor (private http : HttpClient) { }
  
    getCategory () : Observable <any> {
      return this.http.get (API_ENDPOINT.category.base) ;
    }
  
    getCategoryById (id: any) : Observable <any> {
      return this.http.get (API_ENDPOINT.category.base + '/' + id) ;
    }
  
    createCategory  (product : Category) : Observable <any> {
      return this.http.post (API_ENDPOINT.category.base , product) ;
    }
  
    updateCategory  (id : any , category : Category) : Observable <any> {
      return this.http.put (API_ENDPOINT.category.base + '/' + id , category) ;
    }
  
    deleteCategory  (id : any) : Observable <any> {
      return this.http.delete (API_ENDPOINT.category.base + '/' + id) ;
    }
  
  }