import { formatDate } from '@angular/common';
import { Component, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TransfersService } from 'src/app/services/transfers.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {
  form: UntypedFormGroup;

  alert: boolean = false;

  constructor(
    @Inject(LOCALE_ID) public locale: string,
    private formBuilder: UntypedFormBuilder,
    private service: TransfersService,
    private router: Router
    ) { 
    this.form = this.formBuilder.group({
      contaorigem: [null],
      contadestino: [null],
      valor: [null],
      dataagendamento: [null]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    let data = this.form.value.dataagendamento
    let dataRegistro = formatDate(data,'dd/MM/yyyy',this.locale)
    this.form.value.dataagendamento = dataRegistro;
    //console.log()
    this.service.save(this.form.value).subscribe(result => {
      console.log(result.body)
      if(result.body == null){
        this.alert = true;
      } else {
        this.alert = false;
        this.router.navigate(['']);
      }
    });
  }

}
