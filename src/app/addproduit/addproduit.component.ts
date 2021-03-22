import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

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
  constructor(public route: Router,private snackbar:MatSnackBar) { }
  id:any
  ngOnInit(): void {
    this.id = Math.floor(Math.random()*100);
  }
  addproduit(){
    this.submitted = true;
    if(this.addprodForm.invalid){
      return;
    }
    let prod={id:this.id,Name:this.addprodForm.value.Name,Discription:this.addprodForm.value.Discription,Quantity:this.addprodForm.value.Quantity}
    let Prods = JSON.parse(localStorage.getItem("Prods") || '[]');
    Prods.push(prod);
    localStorage.setItem("Prods",JSON.stringify(Prods));
    this.route.navigate(['list-produit'])
    this.snackbar.open("added", "close", {
      duration: 2000,

    });
  }
}
