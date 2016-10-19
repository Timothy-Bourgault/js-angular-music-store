import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { CdListComponent }   from './cd-list.component';
import { ShoppoingCartComponent }   from './shopping-cart.component';
import { GenrePipe }   from './genre.pipe';

@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CdListComponent,
    ShoppoingCartComponent,
    GenrePipe
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
