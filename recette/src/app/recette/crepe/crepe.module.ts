import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrepePageRoutingModule } from './crepe-routing.module';

import { CrepePage } from './crepe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrepePageRoutingModule
  ],
  declarations: [CrepePage]
})
export class CrepePageModule {}
