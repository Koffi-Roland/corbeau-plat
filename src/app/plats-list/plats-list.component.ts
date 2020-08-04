import { Component, OnInit } from '@angular/core';
import { PlatService } from '../service/plat.service';
import { Plat } from '../modele/plat.modele';

@Component({
  selector: 'app-plats-list',
  templateUrl: './plats-list.component.html',
  styleUrls: ['./plats-list.component.css']
})
export class PlatsListComponent implements OnInit {
plats:Plat[];
  constructor(private platService: PlatService) { }

  ngOnInit(): void {
    this.getPlats();
  }
  getPlats():Plat[]{
    this.plats =  this.platService.getUsers();
     return this.plats;
   }
}
