import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomeService {

  constructor(private http: HttpClient) { }
  // Add new product (used in add-customer component)
  addUser(userData: any){
    return this.http.post("http://localhost:3000/Users",userData)
  }

  //Get all products (used in customers compnent)
  getAllUser(){
    return this.http.get("http://localhost:3000/Users")
  }

  //Get Product by index (used in update-customer component)
  getUserById(id:number){
    return this.http.get("http://localhost:3000/Users/"+id)
  }

  //Update product by index (used in update-customer compoenent)
  updateUserDataById(updatuserData:any,id:number){
    return this.http.put("http://localhost:3000/Users/"+id,updatuserData)
  }

  // Delete Product by index (used in customers component)
  deleteUserById(id:number){
    return this.http.delete("http://localhost:3000/Users/"+id)
  }
}

