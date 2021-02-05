import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'recette',
    pathMatch: 'full'
  },

  {
    path: 'recette',
    children: [
      { // J'accède sans paramètre
      path:"",
      loadChildren: () => import('./recette/recette.module').then( m => m.RecettePageModule)
    },
    { // J'accède avec un paramètre et donc au détail d'une recette
    // Le paramètre ici c'est idRecette
      path:":idRecette",
      loadChildren: () => import('./recette/crepe/crepe.module').then( m => m.CrepePageModule)
    },
    ]
    
  },

  {
    path: 'crepe',
    loadChildren: () => import('./recette/crepe/crepe.module').then( m => m.CrepePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
