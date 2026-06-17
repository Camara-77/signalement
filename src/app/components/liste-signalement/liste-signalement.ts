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

  listeSignalement: Signalement[] = []

  constructor(private signalementService: SignalementService) {
    
  }

  ngOnInit(): void {
    this.listeSignalement = this.signalementService.getSignalements()
  }

  onSoutenir(id: number): void {
    this.signalementService.incrementerVotes(id);
  }

}
