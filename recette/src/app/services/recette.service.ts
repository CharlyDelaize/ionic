import { Injectable } from '@angular/core';
import { Recette } from '../interface/recette';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  private recette: Recette[] = [
    {
      id:1,
      title:"Crêpe",
      img:"https://assets.afcdn.com/recipe/20180713/81162_w1024h768c1cx1944cy2592.jpg",
      ingredient:["farine", "oeuf", "sucre", "huile", "beurre", "lait", "rhum"]
    },
    {
      id:2,
      title:"Pudding à l'arsenic",
      img:"https://img-3.journaldesfemmes.fr/jaA7Pz4KKq29lYPyTfNMrytlxv8=/750x/smart/17ed7d62e5044efab84a320562013367/recipe-jdf/10015088.jpg",
      ingredient:["strychnine", "morphine", "pétrole", "cigüe", "bave de sangsue", "scorpion", "poivre en grain, NOOON ! Ah ? bon...", "arsenic", "narcotic", "purgatif", "sang de lézard", "sucre en poudre, NOOON ! Ah ? Bon...", "mort au rat", "venin de cobra", "quartier d'orange", "fruits confis moisis", "grès", "vitriol, NOOON ! euh OUIII ! Ah je savais bien que ce serait bon !"]
    },
    {
      id:3,
      title:"Gateau special",
      img:"https://www.aldi.fr/content/dam/aldi/france/recipes/desserts/recettes-gateaux/aldi-s09-gateau-bonbons_3840x2880px.jpg",
      ingredient:["sucre", "épices", "tas de friandises", "agent chimique X"]
    },
  ];

  constructor() { }

  getAllRecette() : Recette[] {
    return[...this.recette]
  }

  getRecetteById(idRecette : number) : Recette {
 return {...this.getAllRecette().find(
   recette => {return recette.id == idRecette}
 )}
  }

  deleteRecette(idRecette : number) : void {

    this.recette = this.recette.filter(
      recette => recette.id != idRecette
    );

  }

}

