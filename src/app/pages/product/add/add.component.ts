import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'app/@core/services/apis/product.service';
import { CategoryService } from 'app/@core/services/apis/category.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-producta',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class ProductAddComponent {
  isVal : boolean = false ;
  dataCategory: any;
  addForm!: FormGroup ;
  img!: any;
  
  constructor (private category: CategoryService, private product : ProductService , private router : Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup ({
      name: new FormControl ('' , Validators.required),
      price: new FormControl ('', Validators.required),
      desc_c: new FormControl ('', Validators.required),
      category_id: new FormControl ('', Validators.required),
      image: new FormControl ('', Validators.required),
    })
    this.getCategory();
  }

  getCategory () {
    this.category.getCategory ().subscribe (res => {
      console.log (res.data) ;
      this.dataCategory = res.data ;
      console.log(this.dataCategory); 
    }, err => {
      console.log (err) ;
    })
  }

  onSubmit () {
    this.isVal = true ;
    console.log (this.addForm.value) ;
    if (this.addForm.valid == true) {
      this.addForm.value.image = this.addForm.value.image.slice(12);
      console.log(this.addForm.value.image);
      this.product.createProduct(this.addForm.value).subscribe (res => {
        console.log ('Them thanh cong') ;
        this.router.navigate (['/pages/product']) ;
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
