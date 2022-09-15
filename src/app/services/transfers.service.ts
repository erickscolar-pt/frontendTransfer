import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Transfers } from '../transfers/model/transfers';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransfersService {


  private readonly API = '/assets/transfers.json'

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Transfers[]>(this.API)
    .pipe(
      first(),
      tap(list => console.log(list))
    )
  }
}