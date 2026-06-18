import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Signalement, SignalementService } from '../../services/signalement.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-detail-signalement',
  imports: [RouterLink, NgClass],
  templateUrl: './detail-signalement.html',
  styleUrl: './detail-signalement.css',
})
export class DetailSignalement implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private signalementService: SignalementService,
  ) {}

  signalementDetail?: Signalement;

  ngOnInit(): void {
    const detailId = Number(this.route.snapshot.paramMap.get('id'));

    this.signalementDetail = this.signalementService.getSignalementById(detailId);
  }

  onSoutenir(): void {
    if (!this.signalementDetail) return;

    this.signalementService.incrementerVotes(this.signalementDetail.id);
  }

  supprimer(): void{
    const confirmer = confirm("Etes-vous sur de vouloir supprimer cet signalement ?")
    if (confirmer) {
      this.signalementService.supprimerSignalement(this.signalementDetail?.id!)
      this.router.navigate(['/']);
    }
    return
  }

  getCategorieClass(): string {
    switch (this.signalementDetail?.categorie) {
      case 'Voirie': return 'bg-secondary';
      case 'Électricité': return 'bg-warning';
      case 'Déchets': return 'bg-success';
      case 'Sécurité': return 'bg-danger';
      case 'Inondation': return 'bg-primary';
      default: return 'bg-dark';
    }
  }
}
