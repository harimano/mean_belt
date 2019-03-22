import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  gotPet:any;
  petid:string;
  errors:any = {
    name:""
  };


  constructor(private _httpServices: HttpService, private _route:ActivatedRoute, private _router:Router) { }

  ngOnInit() {
    this.gotPet = {name:'', type:'', description:'',skills:{}};

    this._route.params.subscribe((params:Params) => {
      console.log("here >>>>")
      console.log((params['id']));
      this._httpServices.getOnePet((params['id']))
        .subscribe(data => {
          this.gotPet = data 
          console.log(this.gotPet)
        })
    });
  }
  
  onSubmitEdit(){
    console.log("pressed edit")
    console.log(this.gotPet._id)
    this.petid = this.gotPet._id
    this._httpServices.updatePet(this.petid,this.gotPet)
      .subscribe(data =>{
        if (data['errors']){
          this.errors = data['errors'];
          console.log("error mate");
          console.log(this.errors);
        }
        else{
          console.log("updated")
          this._router.navigate(['']);
        }
      }
      )};

}
