import { Component , Input, Output, EventEmitter} from '@angular/core';
import { User } from './user.model';
import { Cd } from './cd.model';

@Component({
  selector: 'shopping-cart',
  template: `
  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
          <h4 class="modal-title" id="myModalLabel">Shopping Cart</h4>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-6">
              <h2>Items in Cart:</h2>
            </div>
            <div class="col-sm-3">
              <h2>Quantity:</h2>
            </div>
            <div class="col-sm-3">
              <h2>Cost:</h2>
            </div>
          </div>
          <div class="row">
            <div *ngFor="let currentCd of userChild.albums; let i = index">
              <div class="col-sm-7">
                <h4>{{currentCd.artist}}-{{currentCd.albumName}}</h4>
                <img class="thumbNail" src="{{currentCd.imageUrl}}">
              </div>
              <div class="col-sm-2">
                  <h4>{{currentCd.quantity}}&nbsp;&nbsp;&nbsp;<span id="smaller"><span (click)="addItemHandler(i)" class="glyphicon glyphicon-chevron-up"></span>&nbsp;<span class="glyphicon glyphicon-chevron-down"></span></span></h4>
              </div>
              <div class="col-sm-3">
                <h4>$ {{currentCd.quantity*currentCd.price}}.00</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-body" style="padding-top:0px">
          <div class="row">
            <div class="col-sm-9">
            <h5 class="pull-right">Order Total:</h5>
            </div>
            <div class="col-sm-3">
              <h4>$ {{userChild.orderTotal}}.00</h4>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close Cart</button>
          <button type="button" class="btn btn-primary">Checkout</button>
        </div>
      </div>
    </div>
  </div>
  `
})

export class ShoppoingCartComponent {
  @Input() userChild: User;
  @Output() addItemSender = new EventEmitter();
  addItemHandler(index: number){
    this.addItemSender.emit(index);
  }
}
