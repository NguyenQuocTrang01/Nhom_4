import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'app/@core/services/apis/category.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-categoryd',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class CategoryDeleteComponent {
  id : any = this.route.snapshot.params ['id'] ;

  constructor (private category : CategoryService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit (): void {}

  onSubmit () {
    if (this.id) {
      this.category.deleteCategory (this.id).subscribe (res => {
        console.log ('xoa thanh cong') ;
        this.router.navigate (['/pages/category']) ; 
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
