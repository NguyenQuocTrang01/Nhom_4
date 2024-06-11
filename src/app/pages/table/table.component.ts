import { Component , OnInit } from '@angular/core';
import { TableService } from '../../@core/services/apis/table.service';
import { Table } from '../../@core/interfaces/table.interface';
import { NbComponentShape, NbComponentSize, NbComponentStatus } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {

  dataTable : Table [] = [] ;
  currentPage: number = 1 ;
  pageSize: number = 4 ;
  searchText: string = '' ;

  constructor (private table : TableService , private router : Router) {}

  ngOnInit (): void {
    this.getTable () ;
  }

  getTable () {
    this.table.getTable ().subscribe (res => {
      this.dataTable = res.data ;
      console.log (this.dataTable) ;
    }, err => {
      console.log (err) ;
    })
  }

  onSearchTextEntered (event: any) {
    this.searchText = event.target.value ;
    this.currentPage = 1 ;
  }

  get filteredData () : Table [] {
    if (!this.searchText) {
      return this.dataTable ;
    }

    return this.dataTable.filter (item =>
      (item.number ? item.number.toString ().toLowerCase () : '').includes (this.searchText.toLowerCase ()) ||
      item.status.toLowerCase ().includes (this.searchText.toLowerCase ())
    ) ;
  }

  danger: NbComponentStatus [] = [ 'danger' ] ;
  primary: NbComponentStatus [] = [ 'primary' ] ;
  success: NbComponentStatus [] = [ 'success' ] ;
  shapes: NbComponentShape[] = [ 'rectangle', 'semi-round', 'round' ];
  sizes: NbComponentSize[] = [ 'tiny', 'small', 'medium', 'large', 'giant' ];

}

