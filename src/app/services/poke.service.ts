import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  base_url = environment.base_url;
  dataArray:any;
  private http = inject(HttpClient);
  constructor() { }

  getList(page:number = 0){
    return this.http.get(`${this.base_url}`,{
      params:{
        offset: page,
        limit: 30
      }
    })
  }

  getPokeData(name:string){
    return this.http.get(`${this.base_url}${name}`)
  }
}
