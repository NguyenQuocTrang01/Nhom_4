import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { Revenue } from 'app/@core/interfaces/revenue.interface';

@Injectable({
  providedIn: 'root'
})

export class RevenueService {

  constructor (private http : HttpClient) { }

  getRevenue () : Observable <any> {
    return this.http.get (API_ENDPOINT.revenues.base) ;
  }

  getRevenueById (id: any) : Observable <any> {
    return this.http.get (API_ENDPOINT.revenues.base + '/' + id) ;
  }

  createRevenue (revenues : Revenue) : Observable <any> {
    return this.http.post (API_ENDPOINT.revenues.base , revenues) ;
  }

  updateRevenue (id : any , revenues : Revenue) : Observable <any> {
    return this.http.put (API_ENDPOINT.revenues.base + '/' + id , revenues) ;
  }

  deleteRevenue (id : any) : Observable <any> {
    return this.http.delete (API_ENDPOINT.revenues.base + '/' + id) ;
  }

}
