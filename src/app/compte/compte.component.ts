import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compte: Compte = new Compte();
  // compte : object = { };
  // compte: object = { numero: null , label : "c" , solde : 50.0};
  message: string = "";
  private _headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  ajouterCompte(): void {
    this.message = "compte=" + JSON.stringify(this.compte);
    //appel WS REST:
    let urlWs = "./rest/compte";
    //NB: URL ici relative qui commence par "./rest" ou "rest"
    //et qui sera préfixée par
    //http://localhost:8080/appliSpringBoot selon le
    //fichier proxy.conf.json (ng serve --proxy-config ...)
    this.http.post<Compte>(urlWs, 
                           this.compte, 
                           { headers: this._headers }
                           ).subscribe( result => console.log(result));
  }

  

  ngOnInit() {
  }

}
