import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  serviceUrl: string = "http://localhost:5540/";
  constructor(private http: HttpClient) { }
  getToCart() {
    return this.http.get(this.serviceUrl);
  }
  addToCart(item) {

    let addCart = { id: item.id, name: item.name, price: item.price, imageUrl: item.imageUrl };

    return this.http.post(this.serviceUrl, addCart);

  }
  deleteFromCart(i) {
    return this.http.delete(this.serviceUrl + i._id);
  }

}
