import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'app/@core/interfaces/customer.interface';
import { CustomerService } from 'app/@core/services/apis/customer.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class CustomerAddComponent implements OnInit {
   
  isVal : boolean = false ;
  addForm!: FormGroup ;
  
  constructor (private table : CustomerService , private router : Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup ({
      username: new FormControl ('' , Validators.required),
      address: new FormControl ('' , Validators.required),
      phone:new FormControl ('' , Validators.required),
      email: new FormControl ('' , Validators.required),

    })
  }

  onSubmit () {
    this.isVal = true ;
    console.log (this.addForm.value) ;
    if (this.addForm.valid == true) {
      this.table.createCustomer (this.addForm.value).subscribe (res => {
        console.log ('Them thanh cong') ;
        this.router.navigate (['/pages/customer']) ;
      }, err => {
        console.log (err) ;
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
