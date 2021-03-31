import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  submitted= false;
  addprodForm: FormGroup = new FormGroup({
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required]),
    Quantity: new FormControl('',[Validators.required])
  })
  constructor(public route: Router,private snackbar:MatSnackBar, private productService:ProductService) { }
  ngOnInit(): void {
  }
  addproduit(){
    this.submitted = true;
    if(this.addprodForm.invalid){
      return;
    }
    this.productService.addProduct(this.addprodForm.value)
    this.route.navigate(['list-produit'])
    this.snackbar.open("added", "close", {
      duration: 2000,

    });
  }
}
