import { Component, OnInit } from '@angular/core';
import { CustomeService } from './services/custome.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  constructor(private userService: CustomeService) { }
  Users:any
  ngOnInit(): void {
  this.userService.getAllUser().subscribe((response)=>{
      this.Users = response
    },(error)=>{
      console.log(error);
    })
  }
  
  deleteUser(id:number){
    this.userService.deleteUserById(id).subscribe((response)=>{
      this.ngOnInit()
    },(error)=>{
      console.log(error);
    })
  }

}
