import { Component , OnInit } from '@angular/core';
import { OrderdetailService } from '../../../@core/services/apis/orderdetail.service';
import { Orderdetail } from '../../../@core/interfaces/orderdetail.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderdetaill',
  templateUrl: './orderdetail.component.html',
  styleUrls: ['./orderdetail.component.scss']
})
export class OrderdetailComponent implements OnInit {

  dataOrderdetail : Orderdetail [] = [] ;
  dataProduct : any [] = [] ;

  currentPage: number = 1 ;
  pageSize: number = 4 ;

  id : any | null = this.route.snapshot.params ['id'] ;
  
  constructor (private orderdetail : OrderdetailService , private route : ActivatedRoute) { }

  ngOnInit (): void {
    this.getOrderdetail () ;
    this.getProduct () ;
    if (this.id) {
      localStorage.setItem ('order_id' , this.id) ;
    }
  }

  getOrderdetail () {
    if (this.id) {
      this.orderdetail.getOrderdetail (this.id).subscribe (res => {
        this.dataOrderdetail = res.data ;
      }, err => {
        console.log (err) ;
      })
    }
  }

  getProduct () {
    this.orderdetail.getProduct ().subscribe (res => {
      this.dataProduct = res.data ;
    }, err => {
      console.log (err) ;
    })
  }

}
