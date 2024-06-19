import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluate } from 'app/@core/interfaces/evaluate.interface';
import { EvaluateService } from 'app/@core/services/apis/evaluate.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class EvaluateUpdateComponent implements OnInit{

  isVal : boolean = false ;
  editForm!: FormGroup ;
  id : any = this.route.snapshot.params ['id'] ;
  dataEvaluate : Evaluate ;

  constructor(private evaluate : EvaluateService, private route : ActivatedRoute, private router : Router){}

  ngOnInit(): void {
    this.editForm = new FormGroup ({
      products_id: new FormControl ('' , Validators.required),
      star: new FormControl ('' , Validators.required),
      customers_id: new FormControl ('' , Validators.required),
    })
    this.getEvaluate();
  }

  onSubmit () {
    this.isVal = true ;
    if (this.editForm.valid == true) {
      if (this.id) {
        this.evaluate.updateEvaluate (this.id , this.editForm.value).subscribe (res => {
          console.log ('cap nhat thanh cong') ;
          this.router.navigate (['/pages/evaluate']);
        })
      }
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

  getEvaluate () {
    if (this.id) {
      this.evaluate.getEvaluateById(this.id).subscribe (res => {
        this.dataEvaluate = res.data [0] ;
        this.editForm.patchValue ({
          products_id: this.dataEvaluate?.products_id ,
          star: this.dataEvaluate?.star,
          customers_id: this.dataEvaluate?.customers_id,
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
