import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  allPets:any;
  errors:any = {
    name:""
  };

  constructor(private _httpService: HttpService ) { }

  ngOnInit() {
    this._httpService.getAllPets()
    .subscribe(data => {
        this.allPets = data
        console.log(data)
        console.log(this.allPets)
     });
    
  }

}
