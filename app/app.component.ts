import { Component } from '@angular/core';
import { Cd } from './cd.model';
import { User } from './user.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Music Store</h1>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div id="pipes" class="navbar-header navbar-left">
          <label>Sort By Genre</label>
          <select (change)="onGenreChange($event.target.value)" class="filter">
            <option value="all" selected="selected">All Genres</option>
            <option value="AGR">Avant-Garde-Rap</option>
            <option value="PR">Psychadelic-Rock</option>
            <option value="PP">Post-Psychadelic</option>
            <option value="AE">Accapella-Experimental</option>
            <option value="CFAGM">Cinimatic-Folk-Avant-Garde-Metal</option>
          </select>
          <label>Sort By Artist</label>
          <select (change)="onArtistChange($event.target.value)" class="filter">
            <option value="all" selected="selected">All Artists</option>
            <option value="Pink Floyd">Pink Floyd</option>
            <option value="Grateful Dead">Grateful Dead</option>
            <option value="Hella">Hella</option>
            <option value="Grails">Grails</option>
            <option value="Busdriver">Busdriver</option>
            <option value="Aesop Rock">Aesop Rock</option>
            <option value="Bjork">Bjork</option>
            <option value="Mike Patton">Mike Patton</option>
            <option value="Secret Chiefs 3">Secret Chiefs 3</option>
            <option value="Estradasphere">Estradasphere</option>
          </select>
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
  public masterCdList: Cd [] = [
    new Cd("Pink Floyd", "Dark Side of the Moon", "Psychadelic-Rock", 10, "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"),
    new Cd("Pink Floyd", "Ummagumma", "Psychadelic-Rock", 9, "https://upload.wikimedia.org/wikipedia/en/1/16/PinkFloyd-album-ummagummastudio-300.jpg"),
    new Cd("Pink Floyd", "The Wall", "Post-Psychadelic", 18, "https://lh6.googleusercontent.com/-g6CITlz9D2c/TXFDg1-Nt9I/AAAAAAAABOU/e11x59aTi3o/s1600/Pink_Floyd_-_The_Wall.jpg"),
    new Cd("Grateful Dead", "Dick's Picks vol. 102", "Psychadelic-Rock", 5, "http://www.artguychuck.com/wp-content/uploads/2013/09/dicksPicksRegional.jpg"),
    new Cd("Grateful Dead", "American Beauty", "Psychadelic-Rock", 8, "http://www.covermesongs.com/wp-content/uploads/2016/03/americanbeauty.jpg"),
    new Cd("Grateful Dead", "Grateful Dead(Self-Titled)", "Accapella-Experimental", 7, "http://www.dead.net/sites/default/files/images/DECD132_0.jpg"),
    new Cd("Hella", "Tripper", "Post-Psychadelic", 7, "https://f4.bcbits.com/img/a0193062514_10.jpg"),
    new Cd("Hella", "Hold Your Horse Is", "Post-Psychadelic", 9, "https://f4.bcbits.com/img/a2970431076_16.jpg"),
    new Cd("Hella", "There Is No 666 in Outerspace", "Post-Psychadelic", 11, "https://f4.bcbits.com/img/a3972258467_16.jpg"),
    new Cd("Grails", "Deep Politics", "Post-Psychadelic", 8, "http://www.brooklynvegan.com/files/img/metal/various/grailscover.jpg"),
    new Cd("Grails", "Take Refuge In Clean Living", "Post-Psychadelic", 12, "http://www.progarchives.com/progressive_rock_discography_covers/3395/cover_304191122014_r.JPG"),
    new Cd("Grails", "Burning Off Impurities", "Post-Psychadelic", 10, "https://images-na.ssl-images-amazon.com/images/I/41sK7Fp4V5L.jpg"),
    new Cd("Busdriver", "Beaus and Eros", "Accapella-Experimental", 12, "http://a2.mzstatic.com/us/r30/Music2/v4/0c/25/dc/0c25dca4-5530-6391-c4d6-3575b6df9fa6/669158523665.1200x1200-75.jpg"),
    new Cd("Busdriver", "Perfect Hair", "Cinimatic-Folk-Avant-Garde-Metal", 20, "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Perfect_hair_album_cover.jpg/220px-Perfect_hair_album_cover.jpg"),
    new Cd("Busdriver", "Roadkill Overcoat", "Avant-Garde-Rap", 13, "http://cdn3.pitchfork.com/albums/9656/homepage_large.73b286fa.jpg"),
    new Cd("Aesop Rock", "Labor Days", "Avant-Garde-Rap", 11, "http://images.rapgenius.com/4oasqz2d03mhvndzvj2mkm7qm.600x596x1.jpg"),
    new Cd("Aesop Rock", "The Impossible Kid", "Avant-Garde-Rap", 18, "https://upload.wikimedia.org/wikipedia/en/6/6a/The_Impossible_Kid_Album_Cover.jpg"),
    new Cd("Aesop Rock", "Skelethon", "Avant-Garde-Rap", 14, "http://images.rapgenius.com/3bb1c2e5bd56f3448a01aef2505b6e07.608x608x1.jpg"),
    new Cd("Bjork", "Medula", "Accapella-Experimental", 10, "https://upload.wikimedia.org/wikipedia/en/9/98/Medulla.jpg"),
    new Cd("Bjork", "Homogenic", "Accapella-Experimental", 15, "https://upload.wikimedia.org/wikipedia/en/0/08/Bjork_-_Homogenic_album_cover.jpg"),
    new Cd("Bjork", "Post", "Accapella-Experimental", 16, "http://static.stereogum.com/uploads/2015/06/Bjork-Post.jpg"),
    new Cd("Mike Patton", "Laborintus II", "Accapella-Experimental", 15, "https://upload.wikimedia.org/wikipedia/en/e/e1/Laborintus_II.jpg"),
    new Cd("Mike Patton", "Mondo Cane", "Avant-Garde-Rap", 16, "https://www.rarerecords.com.au/wp-content/uploads/2016/08/Mike-Patton-Mondo-Cain.jpg"),
    new Cd("Secret Chiefs 3", "Path of Most Resistance", "Cinimatic-Folk-Avant-Garde-Metal", 12, "https://upload.wikimedia.org/wikipedia/en/5/59/Secret_Chiefs_3_Path_of_Most_Resistance_Cover.jpg"),
    new Cd("Secret Chiefs 3", "Ishraqiyun: Perichoresis ", "Cinimatic-Folk-Avant-Garde-Metal", 18, "https://e.snmc.io/lk/f/l/cfa8692fa340c05b956990fe915b9cff/5421410.jpg"),
    new Cd("Secret Chiefs 3", "Book Of Horizons", "Cinimatic-Folk-Avant-Garde-Metal", 19, "http://www.progarchives.com/progressive_rock_discography_covers/2088/cover_2315317102010.jpg"),
    new Cd("Estradasphere", "Quadrapus", "Cinimatic-Folk-Avant-Garde-Metal", 20, "https://upload.wikimedia.org/wikipedia/en/3/38/Quadropus.jpg"),
    new Cd("Estradasphere", "Palace Of Mirrors", "Cinimatic-Folk-Avant-Garde-Metal", 13, "http://cps-static.rovicorp.com/3/JPG_1080/MI0000/641/MI0000641631.jpg?partner=allrovi.com"),
    new Cd("Estradasphere", "Passion For Life", "Avant-Garde-Rap", 17, "https://upload.wikimedia.org/wikipedia/en/1/14/Estradasphere-Passion_for_Life.jpg"),


  ]
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
}
