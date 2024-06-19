import { Component , Input ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Customer} from 'app/@core/interfaces/customer.interface';
import { CustomerService } from 'app/@core/services/apis/customer.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-customerl',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  dataCustomer : Customer [] = [] ;
  currentPage: number = 1 ;
  pageSize: number = 4 ;
  searchText: string = '' ;
  

  @Input () showSuccessAlert : boolean = false ;
  isVal : boolean = false ;
  addForm!: FormGroup ;
  constructor (private table : CustomerService) {}

  
  ngOnInit (): void {
    this.getCustomer () ;
    this.addForm = new FormGroup ({
      name: new FormControl ('' , Validators.required),
      email: new FormControl ('' , Validators.required),
      phone: new FormControl ('' , Validators.required),
      address: new FormControl ('' , Validators.required),
    })
  }

  getCustomer () {
    this.table.getCustomer ().subscribe (res => {
      this.dataCustomer = res.data ;
      console.log (this.dataCustomer) ;
    }, err => {
      console.log (err) ;
    })
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}