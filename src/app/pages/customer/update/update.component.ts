import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';
import { CustomerService } from 'app/@core/services/apis/customer.service';
import { Customer } from 'app/@core/interfaces/customer.interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-customeru',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class CustomerUpdateComponent {

  isVal : boolean = false ;
  editForm!: FormGroup ;
  id : any = this.route.snapshot.params ['id'] ;
  dataTable : Customer ;
  
  constructor (private table : CustomerService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.editForm= new FormGroup ({
      username: new FormControl ('' , Validators.required),
      address: new FormControl ('' , Validators.required),
      phone:new FormControl ('' , Validators.required),
      email: new FormControl ('' , Validators.required),
      
    })

    this.getTable () ;
  }

  onSubmit () {
    this.isVal = true ;
    if (this.editForm.valid == true) {
      if (this.id) {
        this.table. updateCustomer  (this.id , this.editForm.value).subscribe (res => {
          console.log ('cap nhat thanh cong') ;
          this.router.navigate (['/pages/customer']) ;
        })
      }
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

  getTable () {
    if (this.id) {
      this.table.getCustomerTableById (this.id).subscribe (res => {
        this.dataTable = res.data [0] ;
        this.editForm.patchValue ({
            username: this.dataTable?.username ,
            address: this.dataTable?.address ,
            phone:this.dataTable?.phone ,
            email: this.dataTable?.email ,
        });
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
}

