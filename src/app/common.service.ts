import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //public humeur : string = "?";
  private _humeur : string ="?";

  //BehaviorSubject<T> est un cas particulier de
  //Observable<T> qui doit absolument être initialisé dès le départ
  //lorsque l'on appelera plus tard bsHumeur.next(...nouvelleValeur...)
  //ça va automatiquement déclencher toutes les callbacks
  //enregistrées via .subscribe(...) au sein d'autres "...Component".

  public bsHumeur :BehaviorSubject<string>  = 
     new BehaviorSubject <string>(this._humeur) ;

  public get humeur(){
    return this._humeur;
  }

  public set humeur(humeur : string) {
    this._humeur = humeur;
    localStorage.setItem("humeur",humeur);
    //appel de .next() pour préciser nouvelle valeur interne
    //du BehaviorSubject et surtout pour redéclencher toutes
    //les callbacks enregistrées via .subscribe(...)
    this.bsHumeur.next(humeur);
  }

  constructor() {
      this.humeur = localStorage.getItem("humeur");
      if(this.humeur == null){
          this.humeur="?" ;
      }
   }
}
