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
   }

  calculerEmprunt(): void {
    this.calculEmprunt.calculer();
  }

  ngOnInit() {
  }

}
