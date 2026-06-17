import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Signalement, SignalementService } from '../../services/signalement.service';
import { CarteSignalement } from '../carte-signalement/carte-signalement';

@Component({
  selector: 'app-liste-signalement',
  imports: [RouterLink, CarteSignalement],
  templateUrl: './liste-signalement.html',
  styleUrl: './liste-signalement.css',
})
export class ListeSignalement implements OnInit{

  listeSignalement: Signalement[] = [];
  signalementsFiltres: Signalement[] = [];

  constructor(private signalementService: SignalementService) {

  }

  ngOnInit(): void {
    this.listeSignalement = this.signalementService.getSignalements();
    this.signalementsFiltres = [...this.listeSignalement];
  }

  onSoutenir(id: number): void {
    this.signalementService.incrementerVotes(id);
  }

  onSupprimer(id: number): void {
    this.signalementService.supprimerSignalement(id);
    this.listeSignalement = this.signalementService.getSignalements();
    this.signalementsFiltres = [...this.listeSignalement];
    }

  filtrerParCategorie(categorie: string): void {
    if (!categorie) {
      this.signalementsFiltres = [...this.listeSignalement];
      return;
    }

    this.signalementsFiltres = this.listeSignalement.filter(
      signalement => signalement.categorie === categorie
    );
  }
}
