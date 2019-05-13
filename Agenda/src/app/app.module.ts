import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaListComponent } from './agenda/agenda-list/agenda-list.component';
import { AgendaFormComponent } from './agenda/agenda-form/agenda-form.component';
import { AgendaService } from './shared/agenda.service';

@NgModule({
  declarations: [
    AppComponent,
    AgendaComponent,
    AgendaListComponent,
    AgendaFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
