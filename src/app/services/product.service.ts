import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  // Add new product (used in add-product component)
  addProduct(productData: any){
    productData.id = Math.floor(Math.random()*100);
    let Prods = JSON.parse(localStorage.getItem("Prods") || '[]');
    Prods.push(productData);
    localStorage.setItem("Prods",JSON.stringify(Prods));
  }

  //Get all products (used in list-product compnent)
  getAllProducts(){
    
    return JSON.parse(localStorage.getItem("Prods") || '[]');
  }

  //Get Product by index (used in update-product component)
  getProductById(id:number){
    
    let Prods = JSON.parse(localStorage.getItem("Prods") || '[]');
    let prod = Prods.find((x:any)=>x.id == id);
    return prod;
  }

  //Update product by index (used in update-product compoenent)
  updateProductDataById(updatProductData:any,id:number){
    let Prods =  JSON.parse(localStorage.getItem("Prods") || '[]');
    let index=Prods.findIndex((x:any) => x.id == id);
    Prods.splice(index,1,updatProductData);
    localStorage.setItem("Prods",JSON.stringify(Prods));

  }

  // Delete Product by index (used in list-products component)
  deleteProductByIndex(index:number){
    let Prods= JSON.parse(localStorage.getItem("Prods") || '[]');
    Prods.splice(index,1);
    localStorage.setItem("Prods",JSON.stringify(Prods));
  }
}
