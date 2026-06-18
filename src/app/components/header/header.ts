import { Component, OnInit } from '@angular/core';
import { SignalementService } from '../../services/signalement.service';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit{

    total = 0
  constructor(private service:SignalementService){

  };

  ngOnInit(): void {
    this.total  =this.service.onCompter()
   
  }

}
