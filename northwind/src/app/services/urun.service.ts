import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urun } from '../models/urun';

@Injectable({  // bu varsa bir servistir
  providedIn: 'root'
})
export class UrunService {
  apiUrl='https://localhost:44316/api/';
  
  constructor(private httpclient:HttpClient) { }
 
  
  getUruns():Observable<Urun[]> { //response model dondurmek ıcın observable kulllanılır
    let newPath= this.apiUrl+"values/getbyurun"
    return this.httpclient.get<Urun[]>(newPath);
    }

    getUrunsByCategory(categoryId:number):Observable<Urun[]> { //response model dondurmek ıcın observable kulllanılır
      let newPath= this.apiUrl+"values/getbycategory?KategoriId="+categoryId

      return this.httpclient.get<Urun[]>(newPath);
      }

      add(product:Urun[])
        {
            return this.httpclient.post(this.apiUrl+"values/add",product)
        }
}
