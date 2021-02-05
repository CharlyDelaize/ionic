import { Component, OnInit } from '@angular/core';
import { RecetteService } from '../services/recette.service';
import { Recette } from '../interface/recette';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.page.html',
  styleUrls: ['./recette.page.scss'],
})
export class RecettePage implements OnInit {

  recette:Recette[];

  constructor(private service : RecetteService) {
    route.params.subscribe(
      val => {
        this.recette = this.service.getAllRecette();
      }


  ngOnInit() {
    this.titlePage = "ma liste des recettes";
    }
    )
  

}
