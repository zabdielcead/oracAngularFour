import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { load } from '@angular/core/src/render3';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  artistas: any [] = [];
  loading: boolean;
  constructor(private spotify: SpotifyService) { }
  buscar(termino: string) {
    console.log('termino es:', termino);
    this.loading = true;
    this.spotify.getArtista(termino)
      .subscribe((data: any) => {
        console.log(data);
        this.artistas = data;
        this.loading = false;
      });
  }

}
