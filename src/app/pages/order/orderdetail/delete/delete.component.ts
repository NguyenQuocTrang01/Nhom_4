import { Component , OnInit } from '@angular/core';
import { OrderdetailService } from '../../../../@core/services/apis/orderdetail.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetaild',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})

export class OrderdetailDeleteComponent implements OnInit {

  id : any = this.route.snapshot.params ['id'] ;
  order_id!: any ;

  constructor (private orderdetail : OrderdetailService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit (): void {
    this.order_id = localStorage.getItem ('order_id') ;
  }

  onSubmit () {
    if (this.id) {
      this.orderdetail.deleteOrderdetail (this.id) .subscribe (res=> {
        console.log ('xoa thanh cong!') ;
        this.router.navigate (['/pages/order/detail/' + this.order_id]) ;
      })
    }
  }

}
