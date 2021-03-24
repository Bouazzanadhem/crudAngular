import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
  Prods:any;
  Searchtext:any;
  currentdate = new Date;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.Prods = this.productService.getAllProducts()
  }
  deletelist(i:number){
    this.productService.deleteProductByIndex(i)
    this.ngOnInit()
  }
  
}
