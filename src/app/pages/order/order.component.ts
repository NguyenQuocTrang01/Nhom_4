import { Component , OnInit } from '@angular/core';
import { OrderService } from '../../@core/services/apis/order.service';
import { TableService } from '../../@core/services/apis/table.service';
import { Order } from '../../@core/interfaces/order.interface';
import { Table } from '../../@core/interfaces/table.interface';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-orderl',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  constructor (private order : OrderService , private table : TableService) { }

  dataOrder : Order [] = [] ;
  dataCustomer : any [] = [] ;
  dataTable : Table [] = [] ;

  currentPage: number = 1 ;
  pageSize: number = 4 ;
  searchText: string = '' ;

  ngOnInit (): void {
    this.getOrders () ;
    this.getCustomer () ;
    this.getTable () ;
  }

  getOrders () {
    this.order.getOrder ().subscribe (res => {
      console.log (res.data) ;
      this.dataOrder = res.data ;
    }, err => {
      console.log (err) ;
    })
  }

  getCustomer () {
    this.order.getCustomer ().subscribe (res => {
      console.log (res.data) ;
      this.dataCustomer = res.data ;
    }, err => {
      console.log (err) ;
    })
  }

  getTable () {
    this.table.getTable ().subscribe (res => {
      console.log (res.data) ;
      this.dataTable = res.data ;
    }, err => {
      console.log (err) ;
    })
  }

  onSearchTextEntered (event: any) {
    this.searchText = event.target.value ;
    this.currentPage = 1 ;
  }

  get filteredData () : Order [] {
    if (!this.searchText) {
      return this.dataOrder ;
    }

    return this.dataOrder.filter (item =>
      (item.date ? item.date.toString ().toLowerCase () : '').includes (this.searchText.toLowerCase ()) 
      ||
      item.status.toLowerCase ().includes (this.searchText.toLowerCase ())
      ||
      (item.total ? item.total.toString ().toLowerCase () : '').includes (this.searchText.toLowerCase ()) 
      ||
      (item.customer_id ? item.customer_id.toString ().toLowerCase () : '').includes (this.searchText.toLowerCase ()) 
      ||
      (item.table_id ? item.table_id.toString ().toLowerCase () : '').includes (this.searchText.toLowerCase ()) 
    ) ;
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  warning: NbComponentStatus [] = [ 'warning' ] ;
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}
