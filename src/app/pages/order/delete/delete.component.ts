import { Component , OnInit } from '@angular/core';
import { OrderService } from '../../../@core/services/apis/order.service';
import { OrderdetailService } from '../../../@core/services/apis/orderdetail.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderd',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class OrderDeleteComponent implements OnInit {

  id : any = this.route.snapshot.params ['id'] ;

  constructor (private order : OrderService , private orderdetail : OrderdetailService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit (): void {

  }

  onSubmit () {
    if (this.id) {
      this.orderdetail.deleteOrderdetailByIdOrder (this.id).subscribe (res => {
        console.log ('Xoa thanh cong chi tiet hoa don') ;
        this.order.deleteOrder (this.id).subscribe (res => {
          console.log ('Xoa thanh cong hoa don') ;
          this.router.navigate (['/pages/order']) ;
        },
        (err) => {
          console.log ('Có lỗi khi xoa hoa don' , err) ;
        })
      },
      (err) => {
        console.log ('Có lỗi khi xoa chi tiet hoa don' , err) ;
      })
    }
  }

}
