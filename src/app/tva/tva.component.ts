import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tva',
  templateUrl: './tva.component.html',
  styleUrls: ['./tva.component.css']
})
export class TvaComponent implements OnInit {

  ht: number;
  taux: number; //en pourcentage
  tva: number;
  ttc: number;

  calculer(): void {
    this.tva = this.ht * this.taux / 100;
    this.ttc = Number(this.ht) + Number(this.tva);
  }

  constructor() { }

  ngOnInit() {
  }

}
