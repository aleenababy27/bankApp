import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  user:any;
   currentUser:any;
   currentAcno:any;
  database:any={

    1000:{acno:1000,uname:"Aleena",password:1000,balance:750,transaction:[]},
    1001:{acno:1001,uname:"Mariya",password:1001,balance:1500,transaction:[]},
    1002:{acno:1002,uname:"Augustine",password:1002,balance:50000,transaction:[]}

}

// save data in localstorage

saveDetails(){
  localStorage.setItem("database",JSON.stringify(this.database))
if(this.currentAcno)
{
  localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
}
if(this.currentUser)
{
  localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
}
}

getDetails(){
  if(localStorage.getItem("database")){
    this.database=JSON.parse(localStorage.getItem("database")||'')
  }
  if(localStorage.getItem("currentAcno")){
    this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')
  }
  if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  }
}
  


  constructor(private router: Router,private fb:FormBuilder,) { 
this.getDetails()
    
  }

  register(uname: any, acno: any, password: any) {

    let database = this.database

    if (acno in database) {
      return false //already a user
    }
    else {
      database[acno] = {
        acno,
        uname,
        password,
        balance: 0,
        transaction:[]
      }
      console.log(database);
      this.saveDetails()
      return true
    }
  
  }

  login(acno: any, pswd: any) {


    let database = this.database;

    if (acno in database) {

      if (pswd == database[acno]["password"]) {
        this.currentUser=database[acno]["uname"]
        console.log(this.currentUser);
        
        this.currentAcno=acno;
        console.log(this.currentAcno);
        
        this.saveDetails()
        return true
      }
      else {
        alert("Invalid Password")
        return false
      }

    }
    else {
      alert("Invalid User")
      return false
    }

  }

  deposit(acno:any,pswd:any,amt:any)
  {
    var amount = parseInt(amt);
    let database=this.database;

    if(acno in database)
    {
      if(pswd==database[acno]["password"])
      {
        database[acno]["balance"] += amount;

        database[acno]["transaction"].push({
          type:"CREDIT",
          amount:amount
        })
       
        this.saveDetails()
        return database[acno]["balance"] 
      }
    else{
      alert("Wrong Password")
    }
    }
    else{
      alert("Wrong Accont Number")
    }

  }

  
  withdraw(acno:any,pswd:any,amt:any)
  {
    var amount = parseInt(amt);
    let database=this.database;

    if(acno in database)
    {
      if(pswd==database[acno]["password"])
      {
        if(database[acno]["balance"]>amount)
        {
        database[acno]["balance"] -= amount;
        database[acno]["transaction"].push({
          type:"DEBIT",
          amount:amount
          
        })
        
        this.saveDetails()
        return database[acno]["balance"] 
      }
      
      
      else{
        alert("Insuffient balance")
      }
    }
    else{
      alert("Wrong Password")
    }
    }
    else{
      alert("Wrong Accont Number")
    }

  }
// transaction history
transaction(acno:any){

  return this.database[acno].transaction

}

logout(){

}

}
