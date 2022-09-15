import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full' ,redirectTo: 'transferslist'},
    {
      path: 'transferslist',
      loadChildren: () => import('./transfers/transfers.module').then(m => m.TransfersModule)
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
