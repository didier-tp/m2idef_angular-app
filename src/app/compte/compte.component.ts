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

  tabComptes : Compte[] = [];  //Compte[] ou bien Array<Compte>

  constructor(private compteService: CompteService) { }

  ajouterCompte(): void {
    this.message = "compte saisi=" + JSON.stringify(this.compte);
   this.compteService
    .postCompteViaWsRest(this.compte)
    .subscribe( (result) => { console.log(result); 
                              let compteEnregistre  = result;
                             this.message = "compte enregistre="
                               + JSON.stringify(compteEnregistre);
                            this.recupererListeComptes();
                            });
    // choseObservable.subscribe( fonctionCallBack_declenchée_en_différé )
    // NB: la callback asynchrone/non bloquante peut être exprimée
    // sous forme de lambda (alias "arrow function").
  }

  recupererListeComptes(){
    this.compteService.getComptesViaWsRest()
                      .subscribe( (tabCpt) => { this.tabComptes=tabCpt;})
  }

  ngOnInit() {
    this.recupererListeComptes();
  }

}
