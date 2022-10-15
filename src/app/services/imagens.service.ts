import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagensService {

  constructor(private http: HttpClient) { }

  public obterImagens (){
    const key = 'scPo-h4GCoTa-DDPAueciPwOEL-NqBskrcdFKAorrkk'
    return this.http.get(`https://api.unsplash.com/photos/?client_id=${key}`);
  }
}
