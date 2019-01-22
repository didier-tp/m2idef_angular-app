import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvaComponent } from './tva/tva.component';
import { FormsModule } from '@angular/forms';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { CompteComponent } from './compte/compte.component';
@NgModule({
  declarations: [
    AppComponent,
    TvaComponent,
    EmpruntComponent,
    CompteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
