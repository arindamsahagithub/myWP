import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { DebugElement }    from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

  let component : LoginComponent;
  let fixture : ComponentFixture<LoginComponent>;
  let debug :DebugElement;
  let element : HTMLElement;  
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ ReactiveFormsModule ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     imports:[ReactiveFormsModule],
  //     declarations: [LoginComponent], // declare the test component
  //   });

  //   fixture = TestBed.createComponent(LoginComponent);

  //   component = fixture.componentInstance; // BannerComponent test instance

  //   // query for the title <h1> by CSS element selector
  //   //de = fixture.debugElement.query(By.css('h1'));
  //   //el = de.nativeElement;
  // });


  // beforeEach(() =>{
  //   component=new LoginComponent(new FormBuilder());
  // })

  it('compute function should return 0 if input is negetive',()=>{
    // const result=component.compute(function(){
    //   let a=10;
    //   return a+10;
    // });
    expect(component.compute()).toBeTruthy();
  });
  
  // it('compute function should return 1 if input is 0',()=>{
  //   const result=component.compute(0);

  //   expect(result).toBe(1);
  // });

  // it('compute function should return 2 if input is 1',()=>{
  //   const result=component.compute(1);

  //   expect(result).toBe(2);
  // });

  it('login function should return true if user id is "abc" and user password is "pass"',()=>{
    component.loginForm.value.uid="abc";
    component.loginForm.value.upass="pass";

    const result=component.login();

    expect(result).toBe(true);
  });

  it('login function should return false if user id is "xyz" and user password is "pass"',()=>{
    component.loginForm.value.uid="xyz";
    component.loginForm.value.upass="pass";

    const result=component.login();

    expect(result).toBe(false);
  });

  it('login function should return false if user id is "abc" and user password is "xyz"',()=>{
    component.loginForm.value.uid="abc";
    component.loginForm.value.upass="zyz";

    const result=component.login();

    expect(result).toBe(false);
  });

});
