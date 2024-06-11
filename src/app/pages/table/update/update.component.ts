import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';
import { TableService } from '../../../@core/services/apis/table.service';
import { Table } from '../../../@core/interfaces/table.interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import Swal from 'sweetalert2' ;

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class TableUpdateComponent implements OnInit {

  isVal : boolean = false ;
  editForm!: FormGroup ;
  id : any = this.route.snapshot.params ['id'] ;
  dataTable : Table ;
  
  constructor (private table : TableService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.editForm = new FormGroup ({
      number: new FormControl ('' , Validators.required),
      status: new FormControl ('' , Validators.required),
    })

    this.getTable () ;
  }

  onSubmit () {
    this.isVal = true ;
    if (this.editForm.valid == true) {
      if (this.id) {
        this.table.updateTable (this.id , this.editForm.value).subscribe (res => {
          console.log ('cap nhat thanh cong') ;
          this.showSweetAlertSuccess () ;
          this.router.navigate (['/pages/table']) ;
        })
      }
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

  getTable () {
    if (this.id) {
      this.table.getTableById (this.id).subscribe (res => {
        this.dataTable = res.data [0] ;
        this.editForm.patchValue ({
          number: this.dataTable?.number ,
          status: this.dataTable?.status,
        });
      })
    }
  }

  showSweetAlertSuccess () {
    Swal.fire ({
      title: 'Thành công!',
      text: 'Xóa bàn thành công.',
      icon: 'warning',
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
