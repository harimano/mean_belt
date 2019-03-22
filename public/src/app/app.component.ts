import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'public';
  allPets:any;
  errors:any = {
    name:""
  };

  

  constructor(private _httpService: HttpService ){ }


  ngOnInit(){
    // this._httpService.getAllPets()
    // .subscribe(data => {
    //   this.allPets = data
    //   console.log("appp"+data)
    //   console.log("appp"+this.allPets)
    // });
  }




}
