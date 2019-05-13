import { Injectable } from '@angular/core';
import { Agenda } from './agenda.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  readonly UrlAPI = 'http://localhost:52226/api/'
  formData: Agenda
  list: Agenda[];

  constructor(private http: HttpClient) { }

  postAgenda() {
    return this.http.post(this.UrlAPI + 'AgendaDetail', this.formData);
  }

  putAgenda() {
    return this.http.put(this.UrlAPI + 'AgendaDetail/' + this.formData.PMId, this.formData);
  }

  deleteAgenda(id){
    return this.http.delete(this.UrlAPI + 'AgendaDetail/' + id);
  }

  refreshList() {
    this.http.get(this.UrlAPI + 'AgendaDetail')
      .toPromise()
      .then(res => this.list = res as Agenda[]);
  }
}
