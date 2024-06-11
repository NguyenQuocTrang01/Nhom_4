import { Component , OnInit } from '@angular/core';
import { OrderdetailService } from '../../../../@core/services/apis/orderdetail.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import Swal from 'sweetalert2' ;

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
        this.showSweetAlertSuccess () ;
        this.router.navigate (['/pages/order/detail/' + this.order_id]) ;
      })
    }
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  warning: NbComponentStatus [] = [ 'warning' ] ;
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

  showSweetAlertSuccess () {
    Swal.fire ({
      title: 'Thành công!',
      text: 'Xóa chi tiết hóa đơn thành công.',
      icon: 'error',
      confirmButtonText: 'Đóng'
    }) ;
  }

}
