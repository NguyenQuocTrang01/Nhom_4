import { Component , OnInit } from '@angular/core';
import { OrderdetailService } from '../../../@core/services/apis/orderdetail.service';
import { Orderdetail } from '../../../@core/interfaces/orderdetail.interface';
import { ActivatedRoute } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

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
  searchText: string = '' ;

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

  onSearchTextEntered (event: any) {
    this.searchText = event.target.value ;
    this.currentPage = 1 ;
  }

  get filteredData () : Orderdetail [] {
    if (!this.searchText) {
      return this.dataOrderdetail ;
    }

    const filteredOrderdetail = this.dataOrderdetail.filter (orderdetail => {
      const productName = this.dataProduct.find (product => product.id === orderdetail.product_id)?.name?.toLowerCase () ;
      return (
        (orderdetail.quantity ? orderdetail.quantity.toString ().toLowerCase () : '').includes (this.searchText.toLowerCase ()) 
        ||
        (orderdetail.price ? orderdetail.price.toString ().toLowerCase () : '').includes (this.searchText.toLowerCase ()) 
        ||
        (orderdetail.orders_id ? orderdetail.orders_id.toString ().toLowerCase () : '').includes (this.searchText.toLowerCase ()) 
        ||
        (orderdetail.product_id ? orderdetail.product_id.toString ().toLowerCase () : '').includes (this.searchText.toLowerCase ()) 
        ||
        (productName || '').includes (this.searchText.toLowerCase ())
      ) ;
    }) ;

    return filteredOrderdetail ;
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  warning: NbComponentStatus [] = [ 'warning' ] ;
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}
