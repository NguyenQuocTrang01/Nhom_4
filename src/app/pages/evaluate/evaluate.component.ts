import { Component, OnInit } from '@angular/core';
import { Evaluate } from 'app/@core/interfaces/evaluate.interface';
import { EvaluateService } from 'app/@core/services/apis/evaluate.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-evaluatel',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.scss']
})
export class EvaluateComponent implements OnInit {

  dataEvaluate : Evaluate [] = [];
  dataCustomer : any [] = [] ;
  dataProduct : any [] = [] ;
  currentPage: number = 1 ;
  pageSize: number = 4 ;
  searchText: string = '' ;

  constructor(private evaluates : EvaluateService){}
  ngOnInit(): void {
    this.getEvaluate();
    this.getCustomer () ;
    this.getProduct () ;
  }

  getEvaluate(){
    this.evaluates.getEvaluate().subscribe (res => {
      this.dataEvaluate = res.data;
      console.log(this.dataEvaluate);
      
    }, err => {
      console.log(err);
      
    })

  }

  getCustomer () {
    this.evaluates.getCustomer ().subscribe (res => {
      console.log (res.data) ;
      this.dataCustomer = res.data ;
    }, err => {
      console.log (err) ;
    })
  }

  getProduct () {
    this.evaluates.getProduct ().subscribe (res => {
      console.log (res.data) ;
      this.dataProduct = res.data ;
    }, err => {
      console.log (err) ;
    })
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  warning: NbComponentStatus [] = [ 'warning' ] ;
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}
