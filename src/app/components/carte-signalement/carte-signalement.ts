import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Signalement } from '../../services/signalement.service';
import { DatePipe, NgClass, SlicePipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-carte-signalement',
  imports: [NgClass, RouterLink, SlicePipe],
  templateUrl: './carte-signalement.html',
  styleUrl: './carte-signalement.css',
})
export class CarteSignalement {
  @Input() signalement!: Signalement
  // L'enfant déclare qu'il peut émettre un événement nommé "soutenirEvent"
  // <number> = la donnée transmise sera l'id du signalement concerné
  @Output() soutenirEvent = new EventEmitter<number>();
  // @Output() supprimerCard = new EventEmitter<number>()


  onClicSoutenir(): void {
    // L'enfant émet juste l'événement avec l'id concerné
    this.soutenirEvent.emit(this.signalement.id);
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

  // // Bordure gauche colorée — cohérente sur toutes les catégories
  // getCategorieBorderClass(): string {
  //   switch (this.signalement.categorie) {
  //     case 'Voirie': return 'border-secondary';
  //     case 'Électricité': return 'border-warning';
  //     case 'Déchets': return 'border-success';
  //     case 'Sécurité': return 'border-danger';
  //     case 'Inondation': return 'border-primary';
  //     default: return 'border-dark';
  //   }
  // }

}
