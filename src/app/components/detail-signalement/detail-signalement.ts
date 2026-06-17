import { Component, OnInit } from '@angular/core';
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
    private signalementService: SignalementService
  ) {
    
  }

  signalementDetail!: Signalement | undefined;

  ngOnInit(): void {
    const detailId = Number(this.route.snapshot.paramMap.get('id'));
    console.log(detailId);
    
    this.signalementDetail = this.signalementService.getSignalementById(detailId)

  }

  
}
