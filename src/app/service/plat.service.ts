import { Injectable } from '@angular/core';
import { Plat } from '../modele/plat.modele';


@Injectable()
export class PlatService {

    private plats: Plat[] = [
        new Plat({
            id: 0,
            libelle: 'Hamburger',
            description: "Un hamburger ou par aphérèse burger, est un sandwich d'origine allemande, composé de deux pains de forme ronde généralement garnis de steak haché et de crudités, salade, tomate, oignon, cornichon, et de sauce",
            prix: '1000 F CFA',
            
            image: ""
        }), new Plat({
            id: 1,
            libelle: 'Pizza',
            description: 'La pizza est une recette de cuisine traditionnelle de la cuisine italienne, originaire de Naples en Italie à base de galette de pâte à pain, garnie de divers mélanges d’ingrédients et cuite au four.',
            prix: '4500 F CFA',

            image: ""

        }), new Plat({
            id: 2,
            libelle: 'Frite',
            description: 'La frite est un bâtonnet de pomme de terre cuit par friture dans une graisse animale ou une huile végétale',
            prix: '2200 F CFA',

            image: ""


        }), new Plat({
            id: 3,
            libelle: 'Chawarma',
            description: 'Le chawarma ou shawarma est le kebab traditionnel des cuisines levantine et turque',
            prix: '2000 F CFA',

            image: ""

        }), new Plat({
            id: 4,
            libelle: 'Falafel',
            description: "Les falafels ou ta‘amiyya sont une spécialité culinaire levantine très répandue au Proche-Orient, constituée de boulettes de pois chiches ou de fèves broyés et mélangés à diverses épices, frites dans l'huile",
            prix: '3500 F CFA',
            image: ""

        })


    ];

    getUsers(): Plat[] {
        let _plats = [];
        _plats = this.plats;
        return _plats;
    }




}