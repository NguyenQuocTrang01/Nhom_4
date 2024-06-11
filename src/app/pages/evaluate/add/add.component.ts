import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EvaluateService } from 'app/@core/services/apis/evaluate.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-evaluatea',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class EvaluateAddComponent implements OnInit {
  isVal : boolean = false ;
  addForm!: FormGroup ;

  constructor(private evaluates: EvaluateService , private router : Router){}

  ngOnInit(): void {
    this.addForm = new FormGroup ({
      products_id: new FormControl ('' , Validators.required),
      star: new FormControl ('' , Validators.required),
      customers_id: new FormControl ('' , Validators.required),
    })
  }
  onSubmit () {
    this.isVal = true ;
    console.log (this.addForm.value) ;
    if (this.addForm.valid == true) {
      this.evaluates.createEvaluate (this.addForm.value).subscribe (res => {
        console.log ('Them thanh cong') ;
        this.router.navigate (['/pages/evaluate']) ;
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
