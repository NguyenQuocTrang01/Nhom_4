import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';
import { OrderService } from '../../../@core/services/apis/order.service';
import { TableService } from '../../../@core/services/apis/table.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Order } from '../../../@core/interfaces/order.interface';
import { Table } from '../../../@core/interfaces/table.interface';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-orderu',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class OrderUpdateComponent implements OnInit {

  isVal : boolean = false ;
  editForm!: FormGroup ;
  id : any = this.route.snapshot.params ['id'] ;
  dataOrder: Order | null = null ;
  dataCustomer : any [] = [] ;
  dataTable : Table [] = [] ;
  
  constructor (private order : OrderService , private table : TableService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup ({
      id: new FormControl ('' , Validators.required),
      customer_id: new FormControl ('' , Validators.required),
      total: new FormControl ('' , [Validators.required , Validators.min (1)]),
      table_id: new FormControl ('' , Validators.required),
      status: new FormControl ('' , Validators.required),
    })

    if (this.id) {
      console.log (this.id) ;
      this.getOrderById () ;
      this.getTable () ;
      this.getCustomer () ;
    }
  }

  getOrderById () {
    this.order.getOrderById (this.id).subscribe (res => {
      this.dataOrder = res.data [0] ;
      this.editForm.patchValue ({
        id: this.dataOrder?.id,
        customer_id: this.dataOrder?.customer_id,
        total: this.dataOrder?.total,
        table_id: this.dataOrder?.table_id,
        status: this.dataOrder?.status,
      });
      console.log (this.dataOrder) ;
    },
    (err) => {
      console.log ('Có lỗi khi truy van' , err) ;
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

  onSubmit () {
    this.isVal = true ;
    console.log (this.editForm.value) ;
    if (this.editForm.valid == true) {
      this.order.updateOrder (this.editForm.value.id , this.editForm.value).subscribe (res => {
        console.log (res) ;
        this.router.navigate (['/pages/order']) ;
      })
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  warning: NbComponentStatus [] = [ 'warning' ] ;
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}
