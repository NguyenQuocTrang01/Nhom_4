import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'app/@core/interfaces/category.interface';
import { CategoryService } from 'app/@core/services/apis/category.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-categoryu',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class CategoryUpdateComponent {
  isVal : boolean = false ;
  editForm!: FormGroup ;
  id : any = this.route.snapshot.params ['id'] ;
  dataCategory : Category ;

  constructor (private category : CategoryService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup ({
      name: new FormControl ('' , Validators.required),
    })

    this.getCategory() ;
  }

  onSubmit () {
    this.isVal = true ;
    if (this.editForm.valid == true) {
      if (this.id) {
        this.category.updateCategory (this.id , this.editForm.value).subscribe (res => {
          console.log ('cap nhat thanh cong') ;
          this.router.navigate (['/pages/category']) ;
        })
      }
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

  getCategory () {
    if (this.id) {
      this.category.getCategoryById (this.id).subscribe (res => {
        this.dataCategory = res.data [0] ;
        this.editForm.patchValue ({
          name: this.dataCategory?.name,
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
