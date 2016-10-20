import { Component, Output, EventEmitter, Input} from '@angular/core';
import { Cd } from './cd.model';

@Component({
  selector: 'cd-list',
  template: `
  <div class="row">
    <div class="col-md-3" *ngFor="let currentCd of childCdList | genre:childDesiredGenre | artist:childDesiredArtist | price:childDesiredSort">
      <div class="well">
        <div class="cd-info">
          <p class="artistFont">{{currentCd.artist}}</p>
          <p class="albumFont">{{currentCd.albumName}}</p>
          <p class="genreFont">{{currentCd.genre}}</p>
          <p>$ {{currentCd.price.toFixed(2)}}</p>
        </div>
        <img class="album-image" src="{{currentCd.imageUrl}}">
        <div class="center-button">
          <button (click)="addToCart(currentCd)" class="btn btn-lg">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class CdListComponent {
  @Input() childCdList: Cd [];
  @Input() childDesiredGenre: string;
  @Input() childDesiredArtist: string;
  @Input() childDesiredSort: string;
  @Output() clickSender = new EventEmitter();
  addToCart(cdToBeAdded: Cd) {
   this.clickSender.emit(cdToBeAdded);
  }
}
