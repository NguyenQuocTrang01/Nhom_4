import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RevenueService } from 'app/@core/services/apis/revenue.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-revenued',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class RevenueDeleteComponent implements OnInit {
  id : any = this.route.snapshot.params ['id'] ;
  constructor(private revenues : RevenueService , private route : ActivatedRoute , private router : Router){}
  ngOnInit(): void {
    
  }
  onSubmit () {
    if (this.id) {
      this.revenues.deleteRevenue (this.id).subscribe (res => {
        console.log ('xoa thanh cong') ;
        this.router.navigate (['/pages/revenue']) ; 
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
