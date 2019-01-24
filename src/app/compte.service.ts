import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Compte } from './compte';
import { Observable ,of } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CompteService {
  private _headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  public postCompteViaWsRest(compte : Compte) : Observable<Compte> {
    //appel WS REST:
    let urlWs = "./rest/compte";
    //NB: URL ici relative qui commence par "./rest" ou "rest"
    //et qui sera préfixée par
    //http://localhost:8080/appliSpringBoot selon le
    //fichier proxy.conf.json (ng serve --proxy-config ...)
    return this.http.post<Compte>(urlWs,
                                  compte,
                                  { headers: this._headers }
                                 );
        //depuis la version 4.3 de angular , http.post<T>
        //ou bien http.get<T> renvoie un resultat de type Observable<T>
  }

  public getComptesSimu(): Observable<Compte[]> {
    let tabCpt = [ 
      { numero : 33 , label : "cpt 33" , solde : 33.33 },
      { numero: 44, label: "cpt 44", solde: 44.44 }
    ];
    return of(tabCpt); //anciennement Observable.of(...)
    //avec import { Observable ,of } from 'rxjs'; en V6 , V7
  }

  public getComptesViaWsRest(): Observable<Compte[]> {
    //appel WS REST:
    let urlWs = "./rest/compte";
    //NB: URL ici relative qui commence par "./rest" ou "rest"
    //et qui sera préfixée par
    //http://localhost:8080/appliSpringBoot selon le
    //fichier proxy.conf.json (ng serve --proxy-config ...)
    return this.http.get<Compte[]>(urlWs)
                  .pipe(
                        map(tab => tab.sort(
                                         (c1,c2)=>c1.solde-c2.solde
                        ))
                  ); //avec import { map } from "rxjs/operators";
    //depuis la version 4.3 de angular , http.post<T>
    //ou bien http.get<T> renvoie un resultat de type Observable<T>
  }
}
