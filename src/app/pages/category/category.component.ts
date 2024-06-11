import { Component } from '@angular/core';
import { CategoryService } from '../../@core/services/apis/category.service';
import { Category } from '../../@core/interfaces/category.interface';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-categoryl',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  dataCategory : Category [] = [] ;
  currentPage: number = 1 ;
  pageSize: number = 4 ;
  searchText: string = '' ;

  constructor (private category : CategoryService) {}

  ngOnInit (): void {
    this.getCategory () ;
  }

  getCategory () {
    this.category.getCategory().subscribe (res => {
      this.dataCategory = res.data ;
      console.log (this.dataCategory) ;
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
