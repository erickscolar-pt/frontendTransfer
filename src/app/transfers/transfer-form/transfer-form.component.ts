import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransfersService } from 'src/app/services/transfers.service';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.scss']
})
export class TransferFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: TransfersService
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
    //console.log(this.form.value)
    this.service.save(this.form.value).subscribe(result => console.log(result));
  }

}
