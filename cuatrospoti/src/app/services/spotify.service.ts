import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' //  providedIn: 'root' seria opcianl en app.module import y en provider
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('service listo');
   }
   getQuery( query: string) {
      const url = `https://api.spotify.com/v1/${query}`;
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQA0ldYHmvhM4eNZIY7mY6dxUlA1Ll1124cNoAi4IbrUuzf5cLIQmhfBTFIldTVCVUBtTDomckMgUaOCFXc'
      });
      return this.http.get(url, {headers});
   }

   getNewRelease() {
       return this.getQuery('browse/new-releases').pipe(map( data => data['albums'].items   // map filtra los resultados
      ));
   }

   getArtista(termino: string) {

      return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe( map( data => data['artists'].items));
   }

   getOneArtista(id: string) {

    return this.getQuery(`artists/${id}`).pipe( map( data => data));
   }

   getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
                           .pipe( map( data => data['tracks']));
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
