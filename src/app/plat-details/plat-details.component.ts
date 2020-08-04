import { Component, OnInit } from '@angular/core';
import { Plat } from '../modele/plat.modele';

@Component({
  selector: 'app-plat-details',
  templateUrl: './plat-details.component.html',
  styleUrls: ['./plat-details.component.css']
})
export class PlatDetailsComponent implements OnInit {

  public plat=  new Plat({
    id: 0,
    libelle: 'Hamburger',
    description: "Un hamburger ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis de steak haché et de crudités, salade, tomate, oignon, cornichon, et de sauce",
    prix: '1000 F CFA',
    image: "https://cdn.radiofrance.fr/s3/cruiser-production/2019/02/3e27345f-9e1e-45bb-9e5f-906f0abb2870/1136_gettyimages-922684138.jpg"
});
  constructor() { }

  ngOnInit(): void {
  }

}
