import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartitem';
import { Urun } from 'src/app/models/urun';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems:CartItem[];
  constructor(private cardservice:CartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  getCart()
  {
    this.cartItems =this.cardservice.list();
  }

  removeFromCart(product:Urun)
  {
    this.cardservice.removeFromItem(product);
  }
}
