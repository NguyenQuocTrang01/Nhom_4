import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';
import { TableService } from '../../../@core/services/apis/table.service';
import { Table } from '../../../@core/interfaces/table.interface';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

}
