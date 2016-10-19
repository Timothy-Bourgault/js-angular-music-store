import { Component } from '@angular/core';
import { Cd } from './cd.model';
import { User } from './user.model';
import { MasterCdList } from './master-cd-list.model';

@Component({
  selector: 'my-app',
  template: `

  <div class="container">
    <h1>Zappa's&nbsp;&nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;&nbsp;&nbsp;Shop</h1>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Genre<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a (click)= "onGenreChange('all')" >All Genres</a></li>
                <li><a (click)= "onGenreChange('AGR')" >Avant-Garde-Rap</a></li>
                <li><a (click)= "onGenreChange('PR')" >Psychadelic-Rock</a></li>
                <li><a (click)= "onGenreChange('PP')" >Post-Psychadelic</a></li>
                <li><a (click)= "onGenreChange('AE')" >Accapella-Experimental</a></li>
                <li><a (click)= "onGenreChange('CFAGM')" >Cinimatic-Folk-Avant-Garde-Metal</a></li>
              </ul>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-left">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Artist<span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a (click)= "onArtistChange('all')" >All Genres</a></li>
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
          <div class="navbar-header navbar-right">
            <h3>Number of Items: {{ user.albums.length }} || Order Total: $ {{ user.orderTotal }}.00  <span class="glyphicon glyphicon-shopping-cart"></span></h3>
          </div>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <shopping-cart></shopping-cart>
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

  public user = new User();
  public desiredGenre: string = "all";
  public desiredArtist: string = "all";
  onGenreChange(optionFromMenu) {
   this.desiredGenre = optionFromMenu;
   console.log(this.desiredGenre);
  }
  onArtistChange(optionFromMenu) {
   this.desiredArtist = optionFromMenu;
   console.log(this.desiredArtist);
  }
  addToCart(cdToBeAdded: Cd) {
    this.user.albums.push(cdToBeAdded);
    this.user.orderTotal += cdToBeAdded.price;
    console.log(this.user.albums);
    console.log(this.user.orderTotal);
  }
  doStuff(){
    console.log("test");
  }
}
