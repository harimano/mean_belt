import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPets(){
    return this._http.get('/pets')
  }

  addPet(pet:any){
    return this._http.post('/pets/new',pet)
  }

  getOnePet(id:string){
    return this._http.get(`/pets/${id}`)
  }

  updatePet(id:string,data:any){
    return this._http.put(`/pets/${id}/edit`,data)
  }

  deletePet(id:string){
    return this._http.delete('/pets/delete/'+id)
  }


  
}
