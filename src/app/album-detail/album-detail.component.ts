import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Album } from '../album.model';
import { AlbumService } from '../album.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
  providers: [AlbumService]
})
export class AlbumDetailComponent implements OnInit {

  name = 'Angular 6';


  albumId: string;
  albumToDisplay;


  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private albumService: AlbumService,
    private sanitizer: DomSanitizer
    ) {

      // this.sanitizer2 = sanitizer;
     }

    ngOnInit() {
      this.route.params.forEach((urlParameters) => {
       this.albumId = urlParameters['id'];
     });
     this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
    }

    //
    // returnSafeSrc(url){
    //   console.log(url)
    //   return this.sanitizer2.bypassSecurityTrustResourceUrl(url)
    // }
}
