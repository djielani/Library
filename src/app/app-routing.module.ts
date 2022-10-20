import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AccueilComponent } from "./accueil/accueil.component";
import { ContactComponent } from "./contact/contact.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { ProduitListComponent } from "./produit-list/produit-list.component";
import { SingleProduitComponent } from "./single-produit/single-produit.component";


const routes : Routes = [
  {path : '', component : AccueilComponent},
  {path : 'librairie', component : ProduitListComponent},
  {path : 'librairie/livre/:id', component : SingleProduitComponent},
  {path : 'about', component : AboutComponent},
  {path : 'contact', component : ContactComponent},
  {path : '**', component : NotfoundComponent}
]

@NgModule({
  imports:[
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule{

}
