import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  database:any={

    1000:{acno:1000,uname:"Aleena",password:1000,balance:750},
    1001:{acno:1001,uname:"Mariya",password:1001,balance:1500},
    1002:{acno:1000,uname:"Augustine",password:1002,balance:50000}

}


  constructor() { }
 
  register(uname:any,acno:any,password:any){

    let database=this.database

    if(acno in database)
    {
      return false //already a user
    }
    else{
        database[acno]={
          acno,
          uname,
          password,
          balance:0
        }
        return true  
    }
    console.log();
  }


}
