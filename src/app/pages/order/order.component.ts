import { Component , OnInit } from '@angular/core';
import { OrderService } from '../../@core/services/apis/order.service';
import { TableService } from '../../@core/services/apis/table.service';
import { Order } from '../../@core/interfaces/order.interface';
import { Table } from '../../@core/interfaces/table.interface';

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

}
