import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root' //  providedIn: 'root' seria opcianl en app.module import y en provider
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('service listo');
   }

   getNewRelease() {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQBoC0e7zxaVwfj6XnXHlSXy3xPjpWDBsmwWC99Zq9M5sO40m96JKgeHCp3dC5Z7mt2FzTCEwJvJC07mX-s'
      });
      return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
   }

   /*getToken() {
     const sclientID = '23550b334d1c4c7ca947de75e259c842';
     const sclient_secret = 'dd417544f4dd4961ade9d0e9c6021061';
     const bodys = new URLSearchParams();
     bodys.set('grant_type', 'client_credentials');
     bodys.set('client_id', sclientID);
     bodys.set('client_secret', sclient_secret);
     const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'

     });

    this.http.post('https://accounts.spotify.com/api/token', bodys, {headers}).subscribe( response => {
      console.log(response);
    }, (err: HttpErrorResponse) => {
      console.log('error', err);
    });
   }*/

}
