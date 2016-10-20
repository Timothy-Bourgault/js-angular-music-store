import { Component } from '@angular/core';
import { Cd } from './cd.model';
import { User } from './user.model';
import { MasterCdList } from './master-cd-list.model';

@Component({
  selector: 'my-app',
  template: `

  <div class="container">
    <h1>Zappa's&nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;&nbsp;Shop</h1>
    <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort By Genre: <strong>{{desiredGenre}}</strong><span class="caret"></span></a>
              <ul class="dropdown-menu dropdown-inverse">
                <li><a (click)= "onGenreChange('All Genres')" >All Genres</a></li>
                <li><a (click)= "onGenreChange('Avant-Garde-Rap')" >Avant-Garde-Rap</a></li>
                <li><a (click)= "onGenreChange('Psychadelic-Rock')" >Psychadelic-Rock</a></li>
                <li><a (click)= "onGenreChange('Post-Psychadelic')" >Post-Psychadelic</a></li>
                <li><a (click)= "onGenreChange('Accapella-Experimental')" >Accapella-Experimental</a></li>
                <li><a (click)= "onGenreChange('Electronic-Folk')" >Electronic-Folk</a></li>
                <li><a (click)= "onGenreChange('Metal-Dub')" >Metal-Dub</a></li>

              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-left">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort By Artist: <strong>{{desiredArtist}}</strong><span class="caret"></span></a>
              <ul class="dropdown-menu dropdown-inverse">
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
                <li><a (click)= "onArtistChange('Silvan Esso')" >Silvan Esso</a></li>
                <li><a (click)= "onArtistChange('Oysterhead')" >Oysterhead</a></li>
                <li><a (click)= "onArtistChange('Dub Trio')" >Dub Trio</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-left">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort By Price: <strong>{{desiredSort}}</strong><span class="caret"></span></a>
              <ul class="dropdown-menu dropdown-inverse">
                <li><a (click)= "onOrderChange('Low to High')" >Low to High</a></li>
                <li><a (click)= "onOrderChange('High to Low')" >High to Low</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a  data-toggle="modal" data-target="#myModal">Number of Items: {{ user.itemCount }}</a></li>
            <li><a  data-toggle="modal" data-target="#myModal">Order Total: $ {{ user.orderTotal }}.00</a></li>
            <li id="big"><a data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-shopping-cart"></span></a></li>
          </ul>
        </div>
      </div>
    </nav>
    <shopping-cart
    [userChild] = "user"
    (addItemSender) = "addItem($event)"
    (subtractItemSender) = "subtractItem($event)"
    ></shopping-cart>
    <cd-list
    [childCdList] = "masterCdList"
    [childDesiredGenre] = "desiredGenre"
    [childDesiredArtist] = "desiredArtist"
    [childDesiredSort] = "desiredSort"
    (clickSender) = "addToCart($event)"
    ></cd-list>

  </div>
  `
})

export class AppComponent {
  public cdList = new MasterCdList();
  public masterCdList: Cd[] = this.sortByKeyDecending(this.cdList.masterCdList, "price");
  public user = new User();
  public desiredGenre: string = "All Genres";
  public desiredArtist: string = "All Artists";
  public desiredSort: string = "High to Low";
  sortByKeyDecending(array, key) {
      return array.sort(function(a, b) {
          var x = a[key]; var y = b[key];
          return ((x < y) ? 1 : ((x > y) ? -1 : 0));
      });
  }
  onGenreChange(optionFromMenu) {
   this.desiredGenre = optionFromMenu;
   console.log(this.desiredGenre);
  }
  onArtistChange(optionFromMenu) {
   this.desiredArtist = optionFromMenu;
   console.log(this.desiredArtist);
  }
  onOrderChange(optionFromMenu){
    this.desiredSort = optionFromMenu;
  }
  addToCart(cdToBeAdded: Cd) {
    var matchingCd: boolean = false;
    if (cdToBeAdded.quantity === 0) {
      alert(cdToBeAdded.albumName + " is OUT OF STOCK!");
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
      var userCd = new Cd(cdToBeAdded.artist, cdToBeAdded.albumName, cdToBeAdded.genre, cdToBeAdded.price, cdToBeAdded.imageUrl);
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
  addItem(index: number){
    for (let i = 0; i < this.masterCdList.length; i++) {
        if (this.masterCdList[i].id === this.user.albums[index].id ) {
          if (this.masterCdList[i].quantity === 0) {
            alert(this.masterCdList[i].albumName + " is OUT OF STOCK!");
            return;
          }
            this.masterCdList[i].quantity--;
        }
    }
    this.user.albums[index].quantity++;
    this.user.orderTotal+= this.user.albums[index].price;
    console.log(this.masterCdList);
    console.log(this.user.albums);
  }
  subtractItem(index: number){
    for (let i = 0; i < this.masterCdList.length; i++) {
        if (this.masterCdList[i].id === this.user.albums[index].id ) {
            this.masterCdList[i].quantity++;
        }
    }
    this.user.albums[index].quantity--;
    this.user.orderTotal-= this.user.albums[index].price;
    if (this.user.albums[index].quantity === 0) {
        this.user.albums.splice(index,1);
    }
    console.log(this.masterCdList);
    console.log(this.user.albums);
  }
}
