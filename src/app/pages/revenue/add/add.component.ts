import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RevenueService } from 'app/@core/services/apis/revenue.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-revenuea',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class RevenueAddComponent implements OnInit {

  isVal : boolean = false ;
  addForm!: FormGroup ;

  constructor(private revenues: RevenueService, private router : Router){}
  ngOnInit(): void {
    this.addForm = new FormGroup ({
      total_cost: new FormControl ('' , Validators.required),
      total_revenue: new FormControl ('' , Validators.required),
      profit: new FormControl ('' , Validators.required),
    })
  }

  onSubmit () {
    this.isVal = true ;
    console.log (this.addForm.value) ;
    if (this.addForm.valid == true) {
      this.revenues.createRevenue (this.addForm.value).subscribe (res => {
        console.log ('Them thanh cong') ;
        this.router.navigate (['/pages/revenue']) ;
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
