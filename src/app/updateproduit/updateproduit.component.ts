import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(private route: ActivatedRoute,private router: Router) { }
  prodId: any
  Prods:any[]=[]
  ngOnInit(): void {
    this.prodId= this.route.snapshot.params['id']
    this.Prods = JSON.parse(localStorage.getItem("Prods") || '[]');
    let prod = this.Prods.find(x=>x.id == this.prodId)
    this.updateprodForm=new FormGroup({
    id: new FormControl(''),
    Name: new FormControl('',[Validators.required]),
    Discription: new FormControl('',[Validators.required]),
    Quantity: new FormControl('',[Validators.required])
  });
  this.updateprodForm.patchValue(prod)
  }
  updateproduit(){
    this.submitted = true;
    if(this.updateprodForm.invalid){
      return;
    }
    let index=this.Prods.findIndex(x => x.id == this.prodId);
    this.Prods.splice(index, 1, this.updateprodForm.value);
    localStorage.setItem("Prods",JSON.stringify(this.Prods));
    this.router.navigate(['list-produit'])
  }

}
