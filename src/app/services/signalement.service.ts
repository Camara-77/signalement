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
    private signalements: Signalement[] = [
    {
      id: Date.now(),
      nom: 'Aliou Diallo',
      localisation: 'Dakar, Sénégal',
      email: 'aliou.diallo@example.com',
      titre: 'Problème de voirie',
      categorie: 'Voirie',
      description: 'Il y a un trou dans la route qui cause des accidents.',
      image: 'https://www.victime-accident.be/medias/photos/blog/2024/ART-route-degradee-olivier-evrard.png',
      votes: 0,
      date: new Date('2023-06-18')
    },
    {
      id: Date.now() + 1,
      nom: 'Fatoumata Drame',
      localisation: 'Dakar, Sénégal',
      email: 'fatoumata.drame@example.com',
      titre: 'Électricité',
      categorie: 'Électricité',
      description: 'Coupure dans la salle informatique',
      image: 'https://cdn.hellowatt.fr/media/solution/images/coupure-courant-technicien.jpg',
      votes: 0,
      date: new Date('2026-06-18')
    },
    {
      id: Date.now() + 2,
      nom: 'Aissatou Combe Camara',
      localisation: 'Dakar, Sénégal',
      email: 'aissatou.combe@example.com',
      titre: 'Problème d\'eau',
      categorie: 'Inondation',
      description: 'Fuite d\'eau dans la rue principale.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjq342KR962tK6j59NuycvnAySBZxMfJvaP4kIhUgE8A&s=10',
      votes: 0,
      date: new Date('2023-06-18')
    }
  ];
  

    constructor() {

      const data = localStorage.getItem('signalements');

      if (data) {

        this.signalements = JSON.parse(data);

      } else {

        this.sauvegarder();

      }

  }

  // fonction pou recuperer tous les signalements
  getSignalements(): Signalement[]{
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
