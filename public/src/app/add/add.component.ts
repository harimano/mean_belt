import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newPet:any;
  errors:any = {
    name:""
  };

  constructor(private _httpService: HttpService,private _route:ActivatedRoute, private _router:Router ) { }

  ngOnInit() {
    this.newPet ={ name:'', type:'', description:'',skills:{}}
  }


  onSubmit(){
    let observable = this._httpService.addPet(this.newPet);
      observable.subscribe(data => {
        if (data['errors']){
          this.errors = data['errors'];
          console.log("error mate");
          console.log(this.errors);
        }
        else{
          console.log("added new pet"+data)
          this.newPet ={ name:'', type:'', description:'',skills:{}};
          this._router.navigate(['']);
        }
      });
  }



}
