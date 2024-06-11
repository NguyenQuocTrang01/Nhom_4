import { Component } from '@angular/core';
import { ProductService } from '../../@core/services/apis/product.service';
import { Product } from '../../@core/interfaces/product.interface';
import { CategoryService } from '../../@core/services/apis/category.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-productl',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent {
  dataProduct : Product [] = [] ;
  dataCategory : any [] = [] ;

  currentPage: number = 1 ;
  pageSize: number = 4 ;
  searchText: string = '' ;

  constructor (private category: CategoryService, private product : ProductService) {}

  ngOnInit (): void {
    this.getProduct () ;
    this.getCategory ();
  }

  getCategory () {
    this.category.getCategory ().subscribe (res => {
      console.log (res.data) ;
      this.dataCategory = res.data ;
    }, err => {
      console.log (err) ;
    })
  }

  getProduct () {
    this.product.getProduct ().subscribe (res => {
      this.dataProduct = res.data ;
      console.log (this.dataProduct) ;
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
