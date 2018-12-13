import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

    artista: any = {};
    loadingArtist: boolean;
    topTracks: any [] = [];
  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
      this.loadingArtist = true;
      this.router.params.subscribe( params => {
          console.log(params['id']);
          this.getArtista(params['id']);
          this.getToptracks((params['id']));
      });
   }

  ngOnInit() {
  }

  getArtista( id: string) {
    console.log('entro a getArtist');
    this.loadingArtist = true;
     this.spotifyService.getOneArtista(id).subscribe( artista =>  {
      console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getToptracks (id: string) {
    this.spotifyService.getTopTracks(id)
        .subscribe( topTracks => {
            this.topTracks = topTracks;
        });

  }

}
