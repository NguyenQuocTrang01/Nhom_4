import { Component , OnInit } from '@angular/core';
import { OrderService } from '../../../@core/services/apis/order.service';
import { TableService } from '../../../@core/services/apis/table.service';
import { OrderdetailService } from '../../../@core/services/apis/orderdetail.service';
import { FormControl , Validators , FormGroup } from '@angular/forms';
import { Table } from '../../../@core/interfaces/table.interface';
import { Order } from '../../../@core/interfaces/order.interface';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { Router } from '@angular/router';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-ordera',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class OrderAddComponent implements OnInit {

  isVal : boolean = false ;
  addForm!: FormGroup ;
  dataCustomer : any [] = [] ;
  dataProduct : any [] = [] ;
  dataTable : Table [] = [] ;
  
  constructor (private order : OrderService , private table : TableService , private orderdetail : OrderdetailService , private router : Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup ({
      customer_id: new FormControl ('' , Validators.required),
      product_id: new FormControl ('' , Validators.required),
      quantity: new FormControl ('' , [Validators.required , Validators.min (1)]),
      table_id: new FormControl ('' , Validators.required),
      status: new FormControl ('' , Validators.required),
      total: new FormControl ('' , [Validators.required , Validators.min (1)]),
    })

    this.getCustomer () ;
    this.getProduct () ;
    this.getTable () ;
  }

  onSubmit () {
    this.isVal = true ;
    console.log (this.addForm) ;
    if (this.addForm.valid == true) {
      let dataOrder : any = {
        customer_id : this.addForm.value.customer_id ,
        total : this.addForm.value.total ,
        table_id : this.addForm.value.table_id ,
        status : this.addForm.value.status ,
      }
      this.order.createOrder (dataOrder).subscribe (res => {
        console.log (res.data.insertId) ;
        this.createOrderdetail (res.data.insertId) ;
        console.log ('Them moi hoa don thanh cong') ;
      }, err => {
        console.log (err) ;
      })
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

  createOrderdetail (orderID) {
    this.orderdetail.getProductByID (this.addForm.value.product_id).subscribe (res => {
      let dataOrderdetail : any = {
        product_id : this.addForm.value.product_id ,
        orders_id : orderID ,
        quantity : this.addForm.value.quantity ,
        price : res.data [0].price ,
      }
      this.orderdetail.createOrderdetail (dataOrderdetail).subscribe (res => {
        console.log ('Them moi chi tiet hoa don thanh cong') ;
        this.showSweetAlertSuccess () ;
        this.router.navigate (['/pages/order']) ;
      })
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

  getProduct () {
    this.order.getProduct ().subscribe (res => {
      console.log (res.data) ;
      this.dataProduct = res.data ;
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

  showSweetAlertSuccess () {
    Swal.fire ({
      title: 'Thành công!',
      text: 'Thêm hóa đơn thành công.',
      icon: 'success',
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
