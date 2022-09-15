import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';


import { ListTransfersComponent } from './list-transfers/list-transfers.component';
import { TransfersRoutingModule } from './transfers-routing.module';
import { TransferFormComponent } from './transfer-form/transfer-form.component';


@NgModule({
  declarations: [
    ListTransfersComponent,
    TransferFormComponent
  ],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    AppMaterialModule
  ]
})
export class TransfersModule { }
