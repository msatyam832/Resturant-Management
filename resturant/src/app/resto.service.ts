import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {restoModel} from '../app/add-restro/restomodel'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  

  url="http://localhost:3000/restaurants";
  restoModeldata=<restoModel>{}

  constructor(private http:HttpClient) { }
  getlist(){
     return this.http.get(this.url)

  }
  savePost(){
    let data ={"name":this.restoModeldata.restoname,"email":this.restoModeldata.email,"address":this.restoModeldata.address}
    return this.http.post(this.url,data)
  }
}
