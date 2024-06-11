import { Component , OnInit , Input } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';
import { TableService } from '../../../@core/services/apis/table.service';
import { Router } from '@angular/router';
import { Table } from '../../../@core/interfaces/table.interface';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class TableAddComponent implements OnInit {

  isVal : boolean = false ;
  addForm!: FormGroup ;
  
  constructor (private table : TableService , private router : Router) { }

  ngOnInit(): void {
    this.addForm = new FormGroup ({
      number: new FormControl ('' , Validators.required),
      status: new FormControl ('' , Validators.required),
    })
  }

  onSubmit () {
    this.isVal = true ;
    if (this.addForm.valid == true) {
      this.table.createTable (this.addForm.value).subscribe (res => {
        this.showSweetAlertSuccess () ;
        this.router.navigate (['/pages/table']) ;
      }, err => {
        console.log (err) ;
      })
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

  showSweetAlertSuccess () {
    Swal.fire ({
      title: 'Thành công!',
      text: 'Thêm bàn thành công.',
      icon: 'success',
      confirmButtonText: 'Đóng'
    }) ;
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  warning: NbComponentStatus [] = [ 'warning' ] ;
  statuses: NbComponentStatus[] = [ 'primary', 'success', 'info', 'warning', 'danger' ];
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}
