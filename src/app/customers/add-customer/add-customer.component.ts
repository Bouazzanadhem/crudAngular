import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomeService } from '../services/custome.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  adduserForm: FormGroup = new FormGroup({
    fName: new FormControl('',[Validators.required]),
    lName: new FormControl('',[Validators.required]),
    Age: new FormControl('',[Validators.required]),
    Country: new FormControl('',[Validators.required])
  })
  constructor(private userService: CustomeService, private route: Router) { }
  id:any
  ngOnInit(): void {
     this.id= Math.floor(Math.random()*100);
     console.log(this.id);
     
  }
  addUser(){
    this.userService.addUser(this.adduserForm.value).subscribe((response:any)=>{
      this.route.navigate(['customers']);
    },(error)=>{
      console.log(error);
    });
  }

}
