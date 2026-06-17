import { Injectable } from "@angular/core"

export interface Signalement{
    id:number,
    nomComplet: string,
    localisation: string,
    email: string,
    titre: string,
    categorie: string
    description: string,
    image?:string,
    votes:number,
    date: Date
}

@Injectable({
  providedIn: 'root'
})

export class SignalementService{
    // creer un tableau signalement
    private signalements: Signalement[] = []

    constructor() {
    this.chargerSignalement();
  }

//   fonction pou recuperer tous les signalements
  getSignalements(): Signalement[] {
    return this.signalements;
  }

//   ajouter un nouveau signalement depuis le formulaire
  addSignalement(signalement: Signalement): void {

    this.signalements.push(signalement);

    localStorage.setItem('signalements', JSON.stringify(this.signalements));
  }

  // recuperer les signalement depuis le loalStorage
  private chargerSignalement(): void {

    const data = localStorage.getItem('signalements');

    if (data) {
      this.signalements = JSON.parse(data);
    }
  }

  // recuperer un signalement a partir de son id
  getSignalementById(id: number): Signalement | undefined { 
    return this.signalements[id];
  }
    
}