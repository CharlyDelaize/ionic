import { Component, Input, OnInit } from '@angular/core';
import { Recette } from 'src/app/interface/recette';

@Component({
  selector: 'app-recette-item',
  templateUrl: './recette-item.component.html',
  styleUrls: ['./recette-item.component.scss'],
})
export class RecetteItemComponent implements OnInit {

  @Input() recetteItem: Recette;

  constructor() { }

  ngOnInit() {}

}
