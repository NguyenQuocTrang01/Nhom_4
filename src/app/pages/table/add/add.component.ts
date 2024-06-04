import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';
import { TableService } from '../../../@core/services/apis/table.service';
import { Router } from '@angular/router';
import { Table } from '../../../@core/interfaces/table.interface';

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
    console.log (this.addForm.value) ;
    if (this.addForm.valid == true) {
      this.table.createTable (this.addForm.value).subscribe (res => {
        console.log ('Them thanh cong') ;
        this.router.navigate (['/pages/table']) ;
      }, err => {
        console.log (err) ;
      })
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

}
