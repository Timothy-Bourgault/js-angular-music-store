import { Component, Output, EventEmitter, Input} from '@angular/core';
import { Cd } from './cd.model';

@Component({
  selector: 'cd-list',
  template: `
  <div class="row">
    <div class="col-md-3" *ngFor="let currentCd of childCdList | genre:childDesiredGenre | artist:childDesiredArtist">
      <div class="well">
        <p>{{currentCd.artist}}</p>
        <p>{{currentCd.albumName}}</p>
        <p class="small">{{currentCd.genre}}</p>
        <p>$ {{currentCd.price.toFixed(2)}}</p>
        <img class="album-image" src="{{currentCd.imageUrl}}">
        <div class="center-button">
          <button (click)="addToCart(currentCd)" class="btn btn-success btn-lg">Add To Cart</button>
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
  @Output() clickSender = new EventEmitter();
  addToCart(cdToBeAdded: Cd) {
   this.clickSender.emit(cdToBeAdded);
  }
}
