import { Component, OnInit, OnChanges  } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import {User} from '../user-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnChanges {
  // myForm = new FormGroup ({
  //   uid : new FormControl(),
  //   upass : new FormControl()
  // });
  mydata:string="hide";
  userModel:User=new User();
  loginForm:FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();   
    console.log("constructor called");
  }

  createForm() {
    this.loginForm = this.fb.group({
      uid:[this.userModel.uid, Validators.required ],//FormControl
      upass:[this.userModel.upass, [Validators.required,this.hasExclamationMark] ]
    });         
  }  
  
  hasExclamationMark(input: FormControl) {
    const hasExclamation = input.value.indexOf('!') >= 0;
    return hasExclamation ? null : { needsExclamation: true };
  }

  ngOnInit() {
    console.log("ngOnInit called");
  }

  ngOnChanges() {
    console.log("ngOnChanges called");
  }
 
  isFormValid():boolean{
    console.log(this.loginForm.status);
    if(this.loginForm.status=="VALID") return true;
    else return false;
  }

  login():boolean{
    let user=this.loginForm.value;
    console.log("Hi: "+this.test(function(){return 10%2==0}));
    if(user.uid=="abc"&&user.upass=="pass") {
      console.log(true);
      return true;
    }
    else 
    {
      console.log(false);
      return false;
    }
  }
 
  test(fn:Function){
    return fn();
  }
compute():any{

  let a={
    x:10,
    y:function(p,q){
      return p+q;
    }
  }
  
  return a.x==a.y(4,6);
  //return true;
    // if(par<0) return 0;
    // else return par+1;
  }
  // compute(par:Function):any{
  //    console.log(par());
  //   // if(par<0) return 0;
  //   // else return par+1;
  // }

}
