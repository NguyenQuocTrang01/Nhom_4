import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { Table } from '../../interfaces/table.interface';

@Injectable({
  providedIn: 'root'
})

export class TableService {

  constructor (private http : HttpClient) { }

  getTable () : Observable <any> {
    return this.http.get (API_ENDPOINT.table.base) ;
  }

  getTableById (id: any) : Observable <any> {
    return this.http.get (API_ENDPOINT.table.base + '/' + id) ;
  }

  createTable (table : Table) : Observable <any> {
    return this.http.post (API_ENDPOINT.table.base , table) ;
  }

  updateTable (id : any , table : Table) : Observable <any> {
    return this.http.put (API_ENDPOINT.table.base + '/' + id , table) ;
  }

  deleteTable (id : any) : Observable <any> {
    return this.http.delete (API_ENDPOINT.table.base + '/' + id) ;
  }

}
