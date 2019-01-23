import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Compte } from './compte';
import { Observable } from 'rxjs';

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
}
