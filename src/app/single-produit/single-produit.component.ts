import { Component, OnInit } from '@angular/core';
import { Services } from '../Services/service.services';
import { model } from '../model/model.app';
import {ActivatedRoute} from '@angular/router'
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-single-produit',
  templateUrl: './single-produit.component.html',
  styleUrls: ['./single-produit.component.css']
})
export class SingleProduitComponent implements OnInit{

book !: model;
currentRate!: number;
closeResult = '';
constructor(private Service : Services, private route : ActivatedRoute, private modalService: NgbModal){

}
open(content: any) {
  this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
    (result) => {
      this.closeResult = `Closed with: ${result}`;
    },
    (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    },
  );
}

private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return `with: ${reason}`;
  }
}
show = false;
	autohide = true;
ngOnInit(){
  const id = +this.route.snapshot.params['id'];
  this.book = this.Service.getProduitByid(id);
  this.currentRate = 5;
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



}
