import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvaComponent } from './tva/tva.component';
import { FormsModule } from '@angular/forms';
import { EmpruntComponent } from './emprunt/emprunt.component';
import { CompteComponent } from './compte/compte.component';
import { HttpClientModule } from '@angular/common/http';
import { CompteService } from './compte.service';
import { MyheaderComponent } from './myheader/myheader.component';
import { MyfooterComponent } from './myfooter/myfooter.component';
import { BasicComponent } from './basic/basic.component';
@NgModule({
  declarations: [
    AppComponent,
    TvaComponent,
    EmpruntComponent,
    CompteComponent,
    MyheaderComponent,
    MyfooterComponent,
    BasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [CompteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
