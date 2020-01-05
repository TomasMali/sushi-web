import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  response: any;



  constructor(public http: HttpClient) { 
    this.http
    .get('http://93.49.6.246:3000/menu').subscribe((response)=> {
      console.log(response)
      
      this.response = response

    })
  }

  ngOnInit() {

  }



getTables(){
  this.http
    .get('http://93.49.6.246:3000/menu').subscribe((response)=> {
      console.log(response)
      this.response = response
    })
}

}
