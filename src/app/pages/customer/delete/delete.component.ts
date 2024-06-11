import { Component,OnInit } from '@angular/core';
import { CustomerService } from 'app/@core/services/apis/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-customerd',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class CustomerDeleteComponent implements OnInit {
  id : any = this.route.snapshot.params ['id'] ;

  constructor (private customer : CustomerService , private route : ActivatedRoute , private router : Router) { }
  ngOnInit (): void {

  }
  onSubmit () {
    if (this.id) {
      this.customer.deleteCustomer (this.id).subscribe (res => {
        console.log ('xoa thanh cong') ;
        this.router.navigate (['/pages/customer']) ; 
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
