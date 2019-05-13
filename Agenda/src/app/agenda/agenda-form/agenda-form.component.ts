import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/agenda.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styles: []
})
export class AgendaFormComponent implements OnInit {

  constructor(private service: AgendaService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      PMId: 0,
      Nome: '',
      Telefone: '',
    }
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.PMId == 0)
      this.insertRecord(form);
    else
      this.updateRecored(form);
    }
    
    insertRecord(form: NgForm) {
      this.service.postAgenda().subscribe(
        res => {
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Telefone cadastrado com sucesso', 'Enviado com sucesso');
        },
        err => {
          console.log(err);
        }
        );
      }
      
      updateRecored(form: NgForm) {
        this.service.putAgenda().subscribe(
          res => {
            this.resetForm(form);
            this.service.refreshList();
            this.toastr.info('Telefone atualizado com sucesso', 'Atualizado com sucesso');
          },
          err => {
        console.log(err);
      }
    );
  }

}
