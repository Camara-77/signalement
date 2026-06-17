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

  // Cette méthode retourne la bonne classe CSS selon la catégorie
 
  // Couleur du badge — utilise les variantes "subtle" de Bootstrap
  // (fond pastel + texte foncé assorti, meilleur contraste que bg-warning classique)
  getCategorieClass(): string {
    switch (this.signalement.categorie) {
      case 'Voirie': return 'text-bg-secondary';
      case 'Électricité': return 'bg-warning-subtle text-warning-emphasis';
      case 'Déchets': return 'bg-success-subtle text-success-emphasis';
      case 'Sécurité': return 'bg-danger-subtle text-danger-emphasis';
      case 'Inondation': return 'bg-primary-subtle text-primary-emphasis';
      default: return 'bg-dark-subtle text-dark-emphasis';
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
