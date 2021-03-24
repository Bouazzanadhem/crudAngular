import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {
  submitted= false;
  updateprodForm: FormGroup = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required]),
    Quantity: new FormControl('',[Validators.required])
  })
  constructor(private route: ActivatedRoute,private router: Router,private productService: ProductService) { }
  prodId: any
  Prod:any;
  ngOnInit(): void {
    this.prodId= this.route.snapshot.params['id']
    this.Prod = this.productService.getProductById(this.prodId)
   
    this.updateprodForm=new FormGroup({
    id: new FormControl(''),
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required]),
    Quantity: new FormControl('',[Validators.required])
  });
  this.updateprodForm.patchValue(this.Prod)
  }
  updateproduit(){
    this.submitted = true;
    if(this.updateprodForm.invalid){
      return;
    }
    this.productService.updateProductDataById(this.updateprodForm.value,this.prodId)
    this.router.navigate(['list-produit'])
  }

}
