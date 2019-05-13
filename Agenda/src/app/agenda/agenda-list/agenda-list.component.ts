import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/shared/agenda.service';
import { Agenda } from 'src/app/shared/agenda.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-agenda-list',
  templateUrl: './agenda-list.component.html',
  styles: []
})
export class AgendaListComponent implements OnInit {

  constructor(
    private service: AgendaService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.service.refreshList();
  }

  editUser(item: Agenda) {
    this.service.formData = item;
  }

  removeUser(PMId) {
    if (confirm('Você realmente quer remover esse contato?')) {
      this.service.deleteAgenda(PMId)
        .subscribe(
          res => {
            this.service.refreshList();
            this.toastr.warning('Contato removido com sucesso', 'Deletado com sucesso');
          },
          err => {
            console.log(err);
          }
        );
    }
  }

}
