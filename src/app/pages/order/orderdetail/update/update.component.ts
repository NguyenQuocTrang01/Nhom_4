import { Component , OnInit } from '@angular/core';
import { FormControl , Validators , FormGroup } from '@angular/forms';

@Component({
  selector: 'app-orderdetailu',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class OrderdetailUpdateComponent implements OnInit {

  isVal : boolean = false ;
  editForm!: FormGroup ;
  
  constructor () { }

  ngOnInit(): void {
    this.editForm = new FormGroup ({
      product_id: new FormControl ('' , Validators.required),
      quantity: new FormControl ('' , Validators.required),
      price: new FormControl ('' , Validators.required),
    })
  }

  onSubmit () {
    this.isVal = true ;
    console.log (this.editForm.value) ;
    if (this.editForm.valid == true) {
      console.log ('form da hop le!') ;
    } else {
      console.log ('form chua hop le!') ;
    }
  }

}
