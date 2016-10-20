import { Component } from '@angular/core';
import { Cd } from './cd.model';
import { User } from './user.model';
import { MasterCdList } from './master-cd-list.model';

@Component({
  selector: 'my-app',
  template: `

  <div class="container">
    <h1>Zappa's&nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;&nbsp;Shop</h1>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort By Genre: <strong>{{desiredGenre}}</strong><span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a (click)= "onGenreChange('All Genres')" >All Genres</a></li>
                <li><a (click)= "onGenreChange('Avant-Garde-Rap')" >Avant-Garde-Rap</a></li>
                <li><a (click)= "onGenreChange('Psychadelic-Rock')" >Psychadelic-Rock</a></li>
                <li><a (click)= "onGenreChange('Post-Psychadelic')" >Post-Psychadelic</a></li>
                <li><a (click)= "onGenreChange('Accapella-Experimental')" >Accapella-Experimental</a></li>
                <li><a (click)= "onGenreChange('Cinimatic-Folk-Avant-Garde-Metal')" >Cinimatic-Folk-Avant-Garde-Metal</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-left">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort By Artist: <strong>{{desiredArtist}}</strong><span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a (click)= "onArtistChange('All Artists')" >All Artists</a></li>
                <li><a (click)= "onArtistChange('Pink Floyd')" >Pink Floyd</a></li>
                <li><a (click)= "onArtistChange('Grateful Dead')" >Grateful Dead</a></li>
                <li><a (click)= "onArtistChange('Hella')" >Hella</a></li>
                <li><a (click)= "onArtistChange('Grails')" >Grails</a></li>
                <li><a (click)= "onArtistChange('Busdriver')" >Busdriver</a></li>
                <li><a (click)= "onArtistChange('Aesop Rock')" >Aesop Rock</a></li>
                <li><a (click)= "onArtistChange('Bjork')" >Bjork</a></li>
                <li><a (click)= "onArtistChange('Mike Patton')" >Mike Patton</a></li>
                <li><a (click)= "onArtistChange('Secret Chiefs 3')" >Secret Chiefs 3</a></li>
                <li><a (click)= "onArtistChange('Estradasphere')" >Estradasphere</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a (click)= "showCart()" >Number of Items: {{ user.itemCount }}</a></li>
            <li><a (click)= "showCart()" >Order Total: $ {{ user.orderTotal }}.00</a></li>
            <li id="big"><a (click)= "showCart()" ><span class="glyphicon glyphicon-shopping-cart"></span></a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <shopping-cart
    *ngIf = "viewShoppingCart"
    ></shopping-cart>
    <cd-list
    [childCdList] = "masterCdList"
    [childDesiredGenre] = "desiredGenre"
    [childDesiredArtist] = "desiredArtist"
    (clickSender) = "addToCart($event)"
    ></cd-list>

  </div>
  `
})

export class AppComponent {
  public cdList = new MasterCdList();
  public masterCdList: Cd[] = this.cdList.masterCdList;
  public viewShoppingCart: boolean = false;
  public user = new User();
  public desiredGenre: string = "All Genres";
  public desiredArtist: string = "All Artists";
  onGenreChange(optionFromMenu) {
   this.desiredGenre = optionFromMenu;
   console.log(this.desiredGenre);
  }
  onArtistChange(optionFromMenu) {
   this.desiredArtist = optionFromMenu;
   console.log(this.desiredArtist);
  }
  addToCart(cdToBeAdded: Cd) {
    var matchingCd: boolean = false;
    if (cdToBeAdded.quantity === 0) {
      console.log(cdToBeAdded.albumName + " is OUt OF Stock!");
      return;
    }
    this.user.itemCount++;
    for (let i = 0; i < this.user.albums.length; i++) {
        if (this.user.albums[i].id === cdToBeAdded.id) {
            matchingCd = true;
            this.user.albums[i].quantity += 1;
            cdToBeAdded.quantity -= 1;
            this.user.orderTotal += cdToBeAdded.price;

            break;
        }
    }
    if (!matchingCd) {
      var userCd = new Cd(cdToBeAdded.artist, cdToBeAdded.albumName, cdToBeAdded.genre, cdToBeAdded.price, cdToBeAdded.imageUrl)
      userCd.id = cdToBeAdded.id;
      cdToBeAdded.quantity -= 1;
      userCd.quantity = 1;
      this.user.albums.push(userCd);
      this.user.orderTotal += userCd.price;
    }
    console.log(this.masterCdList);
    console.log(this.user.albums);
    console.log(this.user.orderTotal);
  }
  showCart(){
    this.viewShoppingCart = true;
  }

}
