import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ordera',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class OrderAddComponent implements OnInit {

  isVal : boolean = false ;
  addForm!: FormGroup ;
  
  constructor () { }

  ngOnInit(): void {
    this.addForm = new FormGroup ({
      user_id: new FormControl ('' , Validators.required),
      product_id: new FormControl ('' , Validators.required),
      quantity: new FormControl ('' , Validators.required),
      price: new FormControl ('' , Validators.required),
      date: new FormControl ('' , Validators.required),
      table_id: new FormControl ('' , Validators.required),
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
