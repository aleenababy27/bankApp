import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno=""
  uname=""
  pswd=""

registerForm=this.fb.group(
  {
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]

  }
)


  constructor(private ds:DataService, private router:Router, private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){

    let uname=this.registerForm.value.uname
    let acno=this.registerForm.value.acno
    let pswd=this.registerForm.value.pswd

    if(this.registerForm.valid){

    //let result = this.ds.register(uname,acno,pswd)

    this.ds.register(uname,acno,pswd).subscribe((result:any)=>{

      
    if(result)
    {
      alert(result.message)
      this.router.navigateByUrl("")
    }

    },
    (result:any)=>{
      alert(result.error.message)
    }
    
    )


    // if(result)
    // {
    //   alert("registration completed. Login Now !!!!")
    //   this.router.navigateByUrl("")
    // }
    // else{
    //   alert("Already registered y this account number. please login or try with new number.")
    //   this.router.navigateByUrl("")
    // }
    
  }
  // else {
  //   alert("Invalid form inputs")
  // }

}
}