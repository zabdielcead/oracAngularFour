import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  // paises: any[] = [];
  nuevasCanciones: any [] = [];
  loading: boolean ;
  constructor( // private http: HttpClient
        private spotify: SpotifyService
    ) {
   /* this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe((resp: any) => {
      this.paises = resp;
      console.log(resp);
    });
    */
     // this.spotify.getToken();
     this.loading = true;
     this.spotify.getNewRelease().subscribe( (data: any) => {
        console.log(data);
         this.nuevasCanciones = data;
         this.loading = false;
     });
   }

  ngOnInit() {
  }

}
