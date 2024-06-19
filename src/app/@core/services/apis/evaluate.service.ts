import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { Evaluate } from 'app/@core/interfaces/evaluate.interface';

@Injectable({
  providedIn: 'root'
})

export class EvaluateService {

  constructor (private http : HttpClient) { }

  getEvaluate () : Observable <any> {
    return this.http.get (API_ENDPOINT.evaluates.base) ;
  }

  getEvaluateById (id: any) : Observable <any> {
    return this.http.get (API_ENDPOINT.evaluates.base + '/' + id) ;
  }

  createEvaluate (evaluates : Evaluate) : Observable <any> {
    return this.http.post (API_ENDPOINT.evaluates.base , evaluates) ;
  }

  updateEvaluate (id : any , evaluates : Evaluate) : Observable <any> {
    return this.http.put (API_ENDPOINT.evaluates.base + '/' + id , evaluates) ;
  }

  deleteEvaluate (id : any) : Observable <any> {
    return this.http.delete (API_ENDPOINT.evaluates.base + '/' + id) ;
  }

  getCustomer () : Observable <any> {
    return this.http.get (API_ENDPOINT.customer.base) ;
  }

  getProduct () : Observable <any> {
    return this.http.get (API_ENDPOINT.product.base) ;
  }
  
}
