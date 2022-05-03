import { Categorie } from "./category";

export class Film {
    id?: number;
    titre?: string;
    description?: string;
    realisateur?:string;
    dateSortie?: Date;
    duree?: number;
    photo?: string;
    categorie?: Categorie;
}