import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { Table } from '../../interfaces/table.interface';
import { AuthService } from '../apis/auth.service';

@Injectable({
  providedIn: 'root'
})

export class TableService {

  constructor (private http : HttpClient , private authService : AuthService) { }

  getTable () : Observable <any> {
    return this.http.get (API_ENDPOINT.table.base ,
      { 
        headers: new HttpHeaders ().set ('x-access-token' , this.authService.getToken ())
      }
    ) ;
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
