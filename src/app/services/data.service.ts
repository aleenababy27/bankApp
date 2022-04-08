import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  database:any={

    1000:{acno:1000,uname:"Aleena",password:1000,balance:750},
    1001:{acno:1001,uname:"Mariya",password:1001,balance:1500},
    1002:{acno:1000,uname:"Augustine",password:1002,balance:50000}

}


  constructor(private router: Router) { }

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
        balance: 0
      }
      console.log(database);

      return true
    }
    console.log();
  }

  login(acno: any, pswd: any) {


    let database = this.database;

    if (acno in database) {

      if (pswd == database[acno]["password"]) {
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

}
