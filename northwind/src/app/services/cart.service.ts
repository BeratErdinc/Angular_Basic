import { Injectable } from '@angular/core';
import { CartItem } from '../models/cartitem';
import { cartItem } from '../models/cartItems';
import { Urun } from '../models/urun';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  


  addToCart(product:Urun)
  {
    let item = cartItem.find(c=>c.product.urunId==product.urunId);
    if(item)
    {
      item.quantity+=1;
    }
    else
    {
      let cartıtem= new CartItem();
      cartıtem.product=product;
      cartıtem.quantity==1;
     cartItem.push(cartıtem)
    }
  }

  list()
  {
    return cartItem;
  }

  removeFromItem(product:Urun)
  {
    let item = cartItem.find(c=>c.product.urunId==product.urunId);
    cartItem.splice(cartItem.indexOf(item),1);
  }
}
