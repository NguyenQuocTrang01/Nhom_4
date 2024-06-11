import { Component, OnInit } from '@angular/core';
import { Revenue } from 'app/@core/interfaces/revenue.interface';
import { RevenueService } from 'app/@core/services/apis/revenue.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-revenuel',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.scss']
})
export class RevenueComponent implements OnInit{

  dataRevenue : Revenue [] = [];
  urrentPage: number = 1 ;
  pageSize: number = 4 ;
  searchText: string = '' ;

  constructor(private revenue: RevenueService){}

  ngOnInit(): void {
    this.getRevenue();
  }

  getRevenue () {
    this.revenue.getRevenue ().subscribe (res => {
      this.dataRevenue = res.data ;
      console.log (this.dataRevenue) ;
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
