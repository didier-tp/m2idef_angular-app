import { Component, OnInit } from '@angular/core';
import { CalculEmprunt } from '../calcul-emprunt';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent implements OnInit {
  calculEmprunt: CalculEmprunt;
                       
  constructor() {
    
    this.calculEmprunt = new CalculEmprunt();
    this.calculEmprunt.duree = 10;
    this.calculEmprunt.taux = 3.0;
    this.calculEmprunt.montant = 20000;
    //OK: method calculer() ET structure ok
    /*
   this.calculEmprunt = {
      montant : 20000,
      duree : 10,
      taux: 3.0
   }; MISSING .mensualite and .calculer()
   */
  /*
  this.calculEmprunt =
  Object.assign(new CalculEmprunt(),
                { montant: 20000,  duree: 10,  taux: 3.0 });
  //OK
  */
   }

  calculerEmprunt(): void {
    this.calculEmprunt.calculer();
  }

  ngOnInit() {
  }

}
