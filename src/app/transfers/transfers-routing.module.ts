import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTransfersComponent } from './list-transfers/list-transfers.component';
import { TransferFormComponent } from './transfer-form/transfer-form.component';

const routes: Routes = [
  {path: '', component: ListTransfersComponent},
  {path: 'new', component: TransferFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule { }
