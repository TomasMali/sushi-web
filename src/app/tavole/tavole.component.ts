import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tavole',
  templateUrl: './tavole.component.html',
  styleUrls: ['./tavole.component.css']
})
export class TavoleComponent implements OnInit {

  response: any;

  allUsers: []

  constructor(public http: HttpClient) { 
    this.http
    .get('http://93.49.6.246:3000/tavola/622406760').subscribe((response)=> {
      console.log(response)
      
      this.response = response

    })
  }

  ngOnInit() {

  }



getTables(){
  this.http
    .get('http://93.49.6.246:3000/tavola/622406760').subscribe((response)=> {
      console.log(response)
      this.response = response
    })
}

}
