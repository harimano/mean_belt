import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

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

  constructor(private _httpService: HttpService ) { }

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
        }
      });
  }



}
