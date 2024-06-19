import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../config/api-endpoint.config';
import { Staff } from 'app/@core/interfaces/Staff.interface';

@Injectable({
  providedIn: 'root'
})

export class StaffService {

  constructor (private http : HttpClient) { }

  getStaff () : Observable <any> {
    return this.http.get (API_ENDPOINT.staff.base) ;
  }

  getStaffTableById (id: any) : Observable <any> {
    return this.http.get (API_ENDPOINT.staff.base + '/' + id) ;
  }

  createStaff (staff : Staff) : Observable <any> {
    return this.http.post (API_ENDPOINT.staff.base ,staff ) ;
  }

  updateStaff (id : any , staff: Staff) : Observable <any> {
    return this.http.put (API_ENDPOINT.staff.base + '/' + id , staff) ;
  }

  deleteStaff (id : any) : Observable <any> {
    return this.http.delete (API_ENDPOINT.staff.base + '/' + id) ;
  }

}
