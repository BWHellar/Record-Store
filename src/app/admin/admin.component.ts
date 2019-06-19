import { Component } from '@angular/core';
import { AlbumService } from '../album.service';
import { Album } from '../album.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AlbumService]
})
export class AdminComponent{

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
  }

  submitForm(title: string, artist: string, image: string, youtube: string, songs: string, description: string) {
    var newAlbum: Album = new Album(title, artist, image, youtube, songs, description);
    this.albumService.addAlbum(newAlbum);
  }

}
