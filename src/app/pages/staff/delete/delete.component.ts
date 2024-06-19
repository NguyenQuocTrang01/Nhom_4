import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { StaffService } from 'app/@core/services/apis/Staff.service';

@Component({
  selector: 'app-staffd',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class StaffDeleteComponent implements OnInit {
  id : any = this.route.snapshot.params ['id'] ;

  constructor (private staff : StaffService , private route : ActivatedRoute , private router : Router) { }
  ngOnInit (): void {

  }
  onSubmit () {
    if (this.id) {
      this.staff.deleteStaff (this.id).subscribe (res => {
        console.log ('xoa thanh cong') ;
        this.router.navigate (['/pages/staff']) ; 
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
