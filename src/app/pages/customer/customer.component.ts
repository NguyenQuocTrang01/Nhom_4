import { Component } from '@angular/core';
import { Customer } from 'app/@core/interfaces/customer.interface';
import { CustomerService } from 'app/@core/services/apis/customer.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-customerl',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  dataCustomer : Customer [] = [] ;
  currentPage: number = 1 ;
  pageSize: number = 4 ;
  searchText: string = '' ;

  constructor (private table : CustomerService) {}

  ngOnInit (): void {
    this.getCustomer () ;
  }

  getCustomer () {
    this.table.getCustomer ().subscribe (res => {
      this.dataCustomer = res.data ;
      console.log (this.dataCustomer) ;
    }, err => {
      console.log (err) ;
    })
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}