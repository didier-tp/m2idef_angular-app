export class CalculEmprunt {
    montant: number;
    duree: number; //nombre annees
    taux: number;//en pourcentage (par an)
    mensualite: number;

    calculer(): void {
       let nbMois = this.duree * 12;
       let tauxMensuel = (this.taux / 100) / 12;
       this.mensualite = (this.montant * tauxMensuel ) 
          / (1 - Math.pow(1 + tauxMensuel, -nbMois));
    }

}
