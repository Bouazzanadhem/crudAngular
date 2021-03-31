import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomeService } from '../services/custome.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  submitted= false;
  updateuserForm: FormGroup = new FormGroup({
    fName: new FormControl('',[Validators.required]),
    lName: new FormControl('',[Validators.required]),
    Age: new FormControl('',[Validators.required]),
    Country: new FormControl('',[Validators.required])
  })
  constructor(private route: ActivatedRoute,private router: Router, private userSerive: CustomeService) { }
  userId: any
  ngOnInit(): void {
    this.userId= this.route.snapshot.params['id']
    this.userSerive.getUserById(this.userId).subscribe((response)=>{
      this.updateuserForm.patchValue(response)
    },(error)=>{
      console.log(error);
    })
    this.updateuserForm = new FormGroup({
      fName: new FormControl('',[Validators.required]),
      lName: new FormControl('',[Validators.required]),
      Age: new FormControl('',[Validators.required]),
      Country: new FormControl('',[Validators.required]),
      id: new FormControl('')
    });
    
  }
  saveUpdate(){
    this.submitted = true;
    if(this.updateuserForm.invalid){
      return;
    }
    this.userSerive.updateUserDataById(this.updateuserForm.value,this.userId).subscribe((response)=>{
      this.router.navigate(['customers'])
    },(error)=>{
      console.log(error);
    });
  }
}
