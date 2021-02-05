import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecettePageRoutingModule } from './recette-routing.module';

import { RecettePage } from './recette.page';
import { RecetteItemComponent } from './recette-item/recette-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecettePageRoutingModule
  ],
  declarations: [RecettePage, RecetteItemComponent]
})
export class RecettePageModule {}
