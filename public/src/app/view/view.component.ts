import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  errors:any = {
    name:""
  };
  gotPet:any;
  petid:string;
  constructor(private _httpServices: HttpService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      console.log("here >>>>")
      console.log((params['id']));
      
      this._httpServices.getOnePet((params['id']))
        .subscribe(data => {
          this.gotPet = data 
          this.petid = this.gotPet._id
          console.log(this.gotPet)
        })
    });
  }

  deletePet(){
    console.log(this.petid)
    this._httpServices.deletePet(this.petid)
      .subscribe(data => console.log("delete pet"))
      this._router.navigate(['']);
  }



}
