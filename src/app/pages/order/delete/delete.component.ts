import { Component , OnInit } from '@angular/core';
import { OrderService } from '../../../@core/services/apis/order.service';
import { OrderdetailService } from '../../../@core/services/apis/orderdetail.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import Swal from 'sweetalert2' ;

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
          this.showSweetAlertSuccess () ;
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

  showSweetAlertSuccess () {
    Swal.fire ({
      title: 'Thành công!',
      text: 'Xóa hóa đơn thành công.',
      icon: 'error',
      confirmButtonText: 'Đóng'
    }) ;
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  warning: NbComponentStatus [] = [ 'warning' ] ;
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}
