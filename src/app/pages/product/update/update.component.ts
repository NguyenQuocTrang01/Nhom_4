import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'app/@core/interfaces/product.interface';
import { CategoryService } from 'app/@core/services/apis/category.service';
import { ProductService } from 'app/@core/services/apis/product.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-productu',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class ProductUpdateComponent {
  isVal : boolean = false ;
  editForm!: FormGroup ;
  dataCategory: any;
  id : any = this.route.snapshot.params ['id'] ;
  dataProduct : Product ;
  img!: any;
  
  constructor (private category: CategoryService, private product : ProductService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup ({
      name: new FormControl ('' , Validators.required),
      price: new FormControl ('', Validators.required),
      desc_c: new FormControl ('', Validators.required),
      category_id: new FormControl ('', Validators.required),
      image: new FormControl ('', Validators.required),
    })
    this.getProduct ();
    this.getCategory();
  }

  onSubmit () {
    this.isVal = true ;
    if (this.editForm.valid == true) {
      if (this.id) {
        this.editForm.value.image = this.editForm.value.image.slice(12);
        console.log(this.editForm.value.image);
        this.product.updateProduct (this.id , this.editForm.value).subscribe (res => {
          console.log ('cap nhat thanh cong') ;
          this.router.navigate (['/pages/product']) ;
        })
      }
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
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

  getProduct () {
    if (this.id) {
      this.product.getProductById (this.id).subscribe (res => {
        this.dataProduct = res.data [0] ;
        this.editForm.patchValue ({
          name: this.dataProduct?.name ,
          price: this.dataProduct?.price,
          desc_c: this.dataProduct?.desc_c,
          category_id: this.dataProduct?.category_id,
          image: this.dataProduct?.image,
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
