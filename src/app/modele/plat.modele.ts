import { IPlat } from '../interface/plat.interface';

export class Plat implements IPlat{

    public id:number;
    public libelle:string;
    public description?:string;
    public prix:string;
    public image?:string;
    constructor(plat:IPlat){
        this.id=plat.id;
        this.libelle=plat.libelle;
        this.description=plat.description;
        this.prix=plat.prix;
        this.image=plat.image;
    }
}