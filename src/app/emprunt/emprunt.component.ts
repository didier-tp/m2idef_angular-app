import { Component, OnInit } from '@angular/core';
import { CalculEmprunt } from '../calcul-emprunt';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent implements OnInit {
  calculEmprunt: CalculEmprunt = new CalculEmprunt();
  constructor() { }

  calculerEmprunt(): void {
    this.calculEmprunt.calculer();
  }

  ngOnInit() {
  }

}
