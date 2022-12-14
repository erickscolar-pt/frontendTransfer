import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontendTransfer';

  constructor(private router: Router){
  }

  public onAdd(){
    this.router.navigate([''])
  }
  public onAddB(){
    this.router.navigate(['transferslist/new'])
  }
}
