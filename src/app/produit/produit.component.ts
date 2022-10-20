import { Component, OnInit, Input } from '@angular/core';
import { model } from '../model/model.app';
import { Services } from '../Services/service.services';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent{
@Input() book !: model;

constructor(public Service : Services, private router:Router){

}

buttonText =  "J'aime";

onClick(){
  if(this.buttonText == "J'aime")
  {
    this.book.compteur++;
    this.buttonText = "J'ai aimé";
  }else{
    this.book.compteur--;
    this.buttonText = "J'aime";
  }
}
voirLivre()
{
  this.router.navigateByUrl('librairie/livre/'+this.book.id);
}
}
