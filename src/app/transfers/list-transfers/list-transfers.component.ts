import { Component, OnInit } from '@angular/core';
import { Transfers } from '../model/transfers';
import { TransfersService } from 'src/app/services/transfers.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-list-transfers',
  templateUrl: './list-transfers.component.html',
  styleUrls: ['./list-transfers.component.scss']
})
export class ListTransfersComponent implements OnInit {

  transferslist: Observable<Transfers[]>;
  displayedColumns = [
    'contaorigem',
    'contadestino',
    'valor',
    'taxa',
    'datatransferencia',
    'dataagendamento'
  ]

  constructor(private transferService: TransfersService) { 
    this.transferslist = this.transferService.list()
    .pipe(
      catchError(
        error => {
          return of([])
        }
      )
    );
   }

  ngOnInit(): void {
  }

}

