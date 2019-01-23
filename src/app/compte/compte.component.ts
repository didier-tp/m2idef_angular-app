import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';

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

  ajouterCompte(): void {
    this.message = "compte=" + JSON.stringify(this.compte);
    //+ futur appel WS REST
  }

  constructor() { }

  ngOnInit() {
  }

}
