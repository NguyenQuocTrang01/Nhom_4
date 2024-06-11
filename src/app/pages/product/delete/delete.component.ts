import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'app/@core/services/apis/product.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-productd',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class ProductDeleteComponent {

  id : any = this.route.snapshot.params ['id'] ;

  constructor (private product : ProductService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit (): void {}

  onSubmit () {
    if (this.id) {
      this.product.getProductById (this.id).subscribe (res => {
        console.log ('Xoa thanh cong chi tiet hoa don') ;
        this.product.deleteProduct (this.id).subscribe (res => {
          console.log ('Xoa thanh cong hoa don') ;
          this.router.navigate (['/pages/product']) ;
        },
        (err) => {
          console.log ('Có lỗi khi xoa hoa don' , err) ;
        })
      },
      (err) => {
        console.log ('Có lỗi khi xoa chi tiet hoa don' , err) ;
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
