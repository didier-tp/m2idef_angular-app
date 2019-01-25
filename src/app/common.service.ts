import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //public humeur : string = "?";
  private _humeur : string ="?";

  public get humeur(){
    return this._humeur;
  }

  public set humeur(humeur : string) {
    this._humeur = humeur;
    localStorage.setItem("humeur",humeur);
  }

  constructor() {
      this.humeur = localStorage.getItem("humeur");
      if(this.humeur == null){
          this.humeur="?" ;
      }
   }
}
