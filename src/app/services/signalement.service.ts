import { Injectable } from "@angular/core"

export interface Signalement{
    id:number,
    nom: string,
    localisation: string,
    email: string,
    titre: string,
    categorie: string
    description: string,
    image?:string,
    votes:number,
    date: Date,
}

@Injectable({
  providedIn: 'root'
})

export class SignalementService{
    // creer un tableau signalement
    private signalements: Signalement[] = []

    constructor() {
    this.chargerSignalement();
    this.onCompter()
  }

  // fonction pou recuperer tous les signalements
  getSignalements(): Signalement[] {
    return this.signalements;
  }

  // ajouter un nouveau signalement depuis le formulaire
  addSignalement(signalement: Signalement): void {

    this.signalements.push(signalement);

    this.sauvegarder()
  }

  // recuperer les signalement depuis le loalStorage
  private chargerSignalement(): void {

    const data = localStorage.getItem('signalements');

    if (data) {
      this.signalements = JSON.parse(data);
    }
  }

  // sauvegarder dans le localStorage
  sauvegarder(): void{
    localStorage.setItem('signalements', JSON.stringify(this.signalements));
  }

  // recuperer un signalement a partir de son id
  getSignalementById(id: number): Signalement | undefined {
    return this.signalements.find(s => s.id === id);
  }


  // incrementer le vote des soutiens
  incrementerVotes(id: number): void {
  const signalement = this.signalements.find(s => s.id === id);

  if (signalement) {
    signalement.votes++;
    this.sauvegarder()
  }
}

  // compter le nombre de signalements
  onCompter(): number{
    return this.signalements.length

  }

  // supprimer un signalement
  supprimerSignalement(id: number): void {
    this.signalements = this.signalements.filter(s => s.id !== id);
    this.sauvegarder()
  }
}
