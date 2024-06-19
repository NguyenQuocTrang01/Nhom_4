import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../../@core/services/apis/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class CustomerAddComponent implements OnInit {
  isVal: boolean = false;
  addForm!: FormGroup;

  constructor(private customerService: CustomerService, private router: Router) {}

  ngOnInit(): void {
    this.addForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required)
    });
  }

  onSubmit(): void {
    this.isVal = true;
    if (this.addForm.valid) {
      this.customerService.createCustomer(this.addForm.value).subscribe(
        (response) => {
          console.log('Thêm khách hàng thành công', response);
          this.router.navigate(['/pages/customer']);
        },
        (error) => {
          console.error('Có lỗi xảy ra', error);
        }
      );
    } else {
      console.log('Form chưa hợp lệ!');
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
