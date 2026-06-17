import { Component, Input } from '@angular/core';
import { Signalement } from '../../services/signalement.service';
import { NgClass } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-carte-signalement',
  imports: [NgClass, RouterLink],
  templateUrl: './carte-signalement.html',
  styleUrl: './carte-signalement.css',
})
export class CarteSignalement {
  @Input() signalement!: Signalement
  // @Input() id!: number

  votesButtonText: string = "Retirer le soutien"
  buttonClicked: boolean = false
  soutenir(): void{
    if (!this.buttonClicked) {
        this.signalement.votes++;
        this.votesButtonText = "Retirer le soutien"
        this.buttonClicked = true
        
      } else {
        this.signalement.votes--;
        this.votesButtonText = "Soutenir"
        this.buttonClicked = false
      }
  }

  // Couleur du badge — utilise les variantes "subtle" de Bootstrap
  // (fond pastel + texte foncé assorti, meilleur contraste que bg-warning classique)
  getCategorieClass(): string {
    switch (this.signalement.categorie) {
      case 'Voirie': return 'bg-secondary';
      case 'Électricité': return 'bg-warning';
      case 'Déchets': return 'bg-success';
      case 'Sécurité': return 'bg-danger';
      case 'Inondation': return 'bg-primary';
      default: return 'bg-dark';
    }
  }

  // Bordure gauche colorée — cohérente sur toutes les catégories
  getCategorieBorderClass(): string {
    switch (this.signalement.categorie) {
      case 'Voirie': return 'border-secondary';
      case 'Électricité': return 'border-warning';
      case 'Déchets': return 'border-success';
      case 'Sécurité': return 'border-danger';
      case 'Inondation': return 'border-primary';
      default: return 'border-dark';
    }
  }

}
