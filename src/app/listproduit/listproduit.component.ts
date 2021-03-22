import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
  Prods:any;
  constructor() { }

  ngOnInit(): void {
    this.Prods = JSON.parse(localStorage.getItem("Prods") || '[]');
  }
  deletelist(i:Number){
    this.Prods.splice(i,1);
    localStorage.setItem("lists",JSON.stringify(this.Prods));
  }

}
