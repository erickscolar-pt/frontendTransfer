import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ListTransfersComponent } from './list-transfers/list-transfers.component';
import { TransfersRoutingModule } from './transfers-routing.module';
import { TransferFormComponent } from './transfer-form/transfer-form.component';
import { NgxMaskModule,IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) ={};



@NgModule({
  declarations: [
    ListTransfersComponent,
    TransferFormComponent
  ],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()
  ]
})
export class TransfersModule { }
