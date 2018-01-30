import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { Route,RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChildComponent } from './child/child.component';

var routes: Route[]=[    
  {path:'', redirectTo:'login',pathMatch:'full'},  
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    ReactiveFormsModule,
    
    UserModule,     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
