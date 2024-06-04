import { Component , OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableService } from '../../../@core/services/apis/table.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class TableDeleteComponent implements OnInit {

  id : any = this.route.snapshot.params ['id'] ;

  constructor (private table : TableService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit (): void {}

  onSubmit () {
    if (this.id) {
      this.table.deleteTable (this.id).subscribe (res => {
        console.log ('xoa thanh cong') ;
        this.router.navigate (['/pages/table']) ; 
      })
    }
  }

}
