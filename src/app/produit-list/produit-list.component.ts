import { Component, OnInit, Input } from '@angular/core';
import { model } from '../model/model.app';
import { Services } from '../Services/service.services';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.css']
})
export class ProduitListComponent implements OnInit {

  constructor(private service : Services) { }

  @Input() meslivres !: model[];
  ngOnInit(){
    this.meslivres = this.service.book;
  }

}
