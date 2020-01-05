import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  response: any;

  allUsers: []

  constructor(public http: HttpClient) { 
    this.http
    .get('http://93.49.6.246:3000/users/').subscribe((response)=> {
      console.log(response)
      
      this.response = response

    })
  }

  ngOnInit() {

  }



getTables(){
  this.http
    .get('http://93.49.6.246:3000/users/').subscribe((response)=> {
      console.log(response)
      this.response = response
    })
}

}
