import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl  } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Revenue } from 'app/@core/interfaces/revenue.interface';
import { RevenueService } from 'app/@core/services/apis/revenue.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-revenueu',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class RevenueUpdateComponent implements OnInit {

  isVal : boolean = false ;
  editForm!: FormGroup ;
  id : any = this.route.snapshot.params ['id'] ;
  dataRevenue : Revenue ;

  constructor(private revenue : RevenueService , private route : ActivatedRoute , private router : Router){}

  ngOnInit(): void {
    this.editForm = new FormGroup ({
      total_cost: new FormControl ('' , Validators.required),
      total_revenue: new FormControl ('' , Validators.required),
      profit: new FormControl ('' , Validators.required),
    })

    this.getRevenue();
  }
  onSubmit () {
    this.isVal = true ;
    if (this.editForm.valid == true) {
      if (this.id) {
        this.revenue.updateRevenue (this.id , this.editForm.value).subscribe (res => {
          console.log ('cap nhat thanh cong') ;
          this.router.navigate (['/pages/revenue']) ;
        })
      }
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

  getRevenue () {
    if (this.id) {
      this.revenue.getRevenueById(this.id).subscribe (res => {
        this.dataRevenue = res.data [0] ;
        this.editForm.patchValue ({
          total_cost: this.dataRevenue?.total_cost ,
          total_revenue: this.dataRevenue?.total_revenue,
          profit: this.dataRevenue?.profit,
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
