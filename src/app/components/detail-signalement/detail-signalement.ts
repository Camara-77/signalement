import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Signalement, SignalementService } from '../../services/signalement.service';

@Component({
  selector: 'app-detail-signalement',
  imports: [],
  templateUrl: './detail-signalement.html',
  styleUrl: './detail-signalement.css',
})
export class DetailSignalement implements OnInit {
  constructor(
    private route: ActivatedRoute,
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
}
