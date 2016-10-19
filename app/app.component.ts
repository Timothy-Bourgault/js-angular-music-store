import { Component } from '@angular/core';
import { Cd } from './cd.model';
import { User } from './user.model';
import { MasterCdList } from './master-cd-list.model';

@Component({
  selector: 'my-app',
  template: `

  <div class="container">
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
    <h1>Zappa's&nbsp;&nbsp;&nbsp;&nbsp;Music&nbsp;&nbsp;&nbsp;&nbsp;Shop</h1>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div id="pipes" class="navbar-header navbar-left">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Genres<span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a (click)= "onGenreChange('all')" >All Genres</a></li>
              <li><a (click)= "onGenreChange('AGR')" >Avant-Garde-Rap</a></li>
              <li><a (click)= "onGenreChange('PR')" >Psychadelic-Rock</a></li>
              <li><a (click)= "onGenreChange('PP')" >Post-Psychadelic</a></li>
              <li><a (click)= "onGenreChange('AE')" >Accapella-Experimental</a></li>
              <li><a (click)= "onGenreChange('CFAGM')" >Cinimatic-Folk-Avant-Garde-Metal</a></li>
            </ul>
          </li>
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Sort By Artist<span class="caret"></span></a>
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
        </div>
        <div class="navbar-header navbar-right">

          <h3>Number of Items: {{ user.albums.length }} || Order Total: $ {{ user.orderTotal }}.00  <span class="glyphicon glyphicon-shopping-cart"></span></h3>
        </div>
      </div>
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
