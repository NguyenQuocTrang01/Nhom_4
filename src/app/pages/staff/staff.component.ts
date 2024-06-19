import { Component , OnInit , Input } from '@angular/core';
import { FormControl, FormGroup, Validators, } from '@angular/forms';
import { Staff } from 'app/@core/interfaces/Staff.interface';
import { StaffService } from 'app/@core/services/apis/Staff.service';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';

@Component({
  selector: 'app-staffl',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {
  dataStaff : Staff [] = [] ;
  currentPage: number = 1 ;
  pageSize: number = 4 ;
  searchText: string = '' ;
  

  @Input () showSuccessAlert : boolean = false ;
  isVal : boolean = false ;
  addForm!: FormGroup ;
  constructor (private table : StaffService) {}

  
  ngOnInit (): void {
    this.getStaff () ;
    this.addForm = new FormGroup ({
      name: new FormControl ('' , Validators.required),
      email: new FormControl ('' , Validators.required),
      phone: new FormControl ('' , Validators.required),
    })
  }

  getStaff () {
    this.table.getStaff().subscribe (res => {
      this.dataStaff = res.data ;
      console.log (this.dataStaff) ;
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
