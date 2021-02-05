import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recette } from '../../interface/recette';

@Component({
  selector: 'app-crepe',
  templateUrl: './crepe.page.html',
  styleUrls: ['./crepe.page.scss'],
})
export class CrepePage implements OnInit {

  recette:Recette;

  constructor(private service : RecetteService,
     private route : ActivatedRoute,
     private router:router) { }

  ngOnInit() {

    this.route.paramMap.subscribe(paramMap => {



      const idRecette = paramMap.get("idRecette");

      this.recette = this.service.getRecetteById(+idRecette);
    
    });

  }

  deleteRecette(idRecette:number) : void {
    this.service.deleteRecette(idRecette);
    this.router.navigate(["../recette"]);
  }

}

