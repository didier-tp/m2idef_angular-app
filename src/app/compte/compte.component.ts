import { Component, OnInit } from '@angular/core';
import { Compte } from '../compte';
import { CompteService } from '../compte.service';

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

  constructor(private compteService: CompteService) { }

  ajouterCompte(): void {
    this.message = "compte saisi=" + JSON.stringify(this.compte);
   this.compteService
    .postCompteViaWsRest(this.compte)
    .subscribe( (result) => { console.log(result); 
                              let compteEnregistre  = result;
                             this.message = "compte enregistre="
                               + JSON.stringify(compteEnregistre);
                            });
  }

  ngOnInit() {
  }

}
