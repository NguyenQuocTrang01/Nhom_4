import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';
import { OrderdetailService } from '../../../../@core/services/apis/orderdetail.service';
import { Orderdetail } from '../../../../@core/interfaces/orderdetail.interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';


@Component({
  selector: 'app-orderdetailu',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class OrderdetailUpdateComponent implements OnInit {

  isVal : boolean = false ;
  editForm!: FormGroup ;
  dataOrderdetail : any ;
  dataProduct : any [] = [] ;
  id : any = this.route.snapshot.params ['id'] ;
  order_id!: any ;
  
  constructor (private orderdetail : OrderdetailService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup ({
      product_id: new FormControl ('' , Validators.required),
      quantity: new FormControl ('' , Validators.required),
    })

    this.getOrderdetailByID () ;
    this.getProduct () ;
    this.order_id = localStorage.getItem ('order_id') ;
  }

  onSubmit () {
    this.isVal = true ;
    console.log (this.editForm.value) ;
    if (this.editForm.valid == true) {
      if (this.id) {
        this.orderdetail.getProductByID (this.editForm.value.product_id).subscribe (res => {
          let dataOrderdetail = {
            id: this.id,
            product_id : this.editForm.value.product_id ,
            quantity : this.editForm.value.quantity ,
            price : res.data [0].price ,
            orders_id : this.order_id ,
          }
          this.orderdetail.updateOrderdetail (dataOrderdetail.id , dataOrderdetail).subscribe (res => {
            console.log ('Cap nhat thanh cong') ;
            this.router.navigate (['/pages/order/detail/' + this.order_id]) ;
          })
        })
      }
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

  getOrderdetailByID () {
    if (this.id) {
      this.orderdetail.getOrderdetailByID (this.id).subscribe (res => {
        console.log (res.data [0]) ;
        this.dataOrderdetail = res.data [0] ;
        this.editForm.patchValue ({
          product_id: this.dataOrderdetail?.product_id,
          quantity: this.dataOrderdetail?.quantity,
        });
      },
      (err) => {
        console.log ('Có lỗi khi truy van' , err) ;
      })
    }
  }

  getProduct () {
    this.orderdetail.getProduct ().subscribe (res => {
      this.dataProduct = res.data ;
      console.log (this.dataProduct) ;
    }, err => {
      console.log (err) ;
    })
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  warning: NbComponentStatus [] = [ 'warning' ] ;
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}
