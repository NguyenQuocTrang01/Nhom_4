import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';
import { OrderdetailService } from '../../../../@core/services/apis/orderdetail.service';
import { Orderdetail } from '../../../../@core/interfaces/orderdetail.interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderdetaila',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class OrderdetailAddComponent implements OnInit {

  isVal : boolean = false ;
  dataProduct : any [] = [] ;
  addForm!: FormGroup ;
  order_id!: any ;
  
  constructor (private orderdetail : OrderdetailService , private router : Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup ({
      product_id: new FormControl ('' , Validators.required),
      quantity: new FormControl ('' , Validators.required),
    })

    this.getProduct () ;
    this.order_id = localStorage.getItem ('order_id') ;
  }

  onSubmit () {
    this.isVal = true ;
    console.log (this.addForm.value) ;
    if (this.addForm.valid == true) {
      this.orderdetail.getProductByID (this.addForm.value.product_id).subscribe (res => {
        let dataOrderdetail = {
          id: 'null',
          product_id : this.addForm.value.product_id ,
          quantity : this.addForm.value.quantity ,
          price : res.data [0].price ,
          orders_id : this.order_id ,
        }
        if (this.order_id) {
          this.orderdetail.createOrderdetail (dataOrderdetail).subscribe (res => {
            console.log ('Them thanh cong chi tiet hoa don') ;
            this.router.navigate (['/pages/order/detail/' + this.order_id]) ;
          }, err => {
            console.log (err) ;
          })
        }
      })
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

  getProduct () {
    this.orderdetail.getProduct ().subscribe (res => {
      console.log (res.data) ;
      this.dataProduct = res.data ;
    }, err => {
      console.log (err) ;
    })
  }

}
