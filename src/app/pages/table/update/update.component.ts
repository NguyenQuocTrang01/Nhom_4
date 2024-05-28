import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class TableUpdateComponent implements OnInit {

  isVal : boolean = false ;
  addForm!: FormGroup ;
  
  constructor () { }

  ngOnInit(): void {
    this.addForm = new FormGroup ({
      numberTable: new FormControl ('12' , Validators.required),
      status: new FormControl ('' , Validators.required),
    })
  }

  onSubmit () {
    this.isVal = true ;
    console.log (this.addForm.value) ;
    if (this.addForm.valid == true) {
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

}
