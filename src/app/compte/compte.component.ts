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
    //+ futur appel WS REST
  }

  

  ngOnInit() {
  }

}
