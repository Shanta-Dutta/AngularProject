import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


























// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import {FormsModule} from '@angular/forms'


// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { StudentsComponent } from './students/students.component';
// // import { HeroesComponent } from './heroes/heroes.component';

// @NgModule({
//   // declarations: [
//   //   AppComponent,
//   //   StudentsComponent
//   // ],

//   declarations: [
//     AppComponent,
//     // HeroesComponent,
//     FormsModule
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
