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
          <select (change)="onChange($event.target.value)" class="filter">
            <option value="all" selected="selected">All Genres</option>
            <option value="AGR">Avant-Garde-Rap</option>
            <option value="PR">Psychadelic-Rock</option>
            <option value="PP">Post-Psychadelic</option>
            <option value="AE">Accapella-Experimental</option>
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
    (clickSender) = "addToCart($event)"
    ></cd-list>

  </div>
  `
})

export class AppComponent {
  public masterCdList: Cd [] = [
    new Cd("Pink Floyd", "Dark Side of the Moon", "Psychadelic-Rock", 10, "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png"),
    new Cd("Grateful Dead", "Dick's Picks vol. 102", "Psychadelic-Rock", 5, "http://www.artguychuck.com/wp-content/uploads/2013/09/dicksPicksRegional.jpg"),
    new Cd("Hella", "Tripper", "Post-Psychadelic", 7, "https://f4.bcbits.com/img/a0193062514_10.jpg"),
    new Cd("Grails", "Deep Politics", "Post-Psychadelic", 8, "http://www.brooklynvegan.com/files/img/metal/various/grailscover.jpg"),
    new Cd("Busdriver", "Beaus and Eros", "Avant-Garde-Rap", 12, "http://a2.mzstatic.com/us/r30/Music2/v4/0c/25/dc/0c25dca4-5530-6391-c4d6-3575b6df9fa6/669158523665.1200x1200-75.jpg"),
    new Cd("Aesop Rock", "Labor Days", "Avant-Garde-Rap", 11, "http://images.rapgenius.com/4oasqz2d03mhvndzvj2mkm7qm.600x596x1.jpg"),
    new Cd("Bjork", "Medula", "Accapella-Experimental", 10, "https://upload.wikimedia.org/wikipedia/en/9/98/Medulla.jpg"),
    new Cd("Mike Patton", "Laborintus II", "Accapella-Experimental", 15, "https://upload.wikimedia.org/wikipedia/en/e/e1/Laborintus_II.jpg"),

  ]
  public user = new User();
  public desiredGenre: string = "all";
  onChange(optionFromMenu) {
   this.desiredGenre = optionFromMenu;
   console.log(this.desiredGenre);
  }
  addToCart(cdToBeAdded: Cd) {
    this.user.albums.push(cdToBeAdded);
    this.user.orderTotal += cdToBeAdded.price;
    console.log(this.user.albums);
    console.log(this.user.orderTotal);
  }
}
