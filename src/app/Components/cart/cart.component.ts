import { NgFor } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  imports: [NgFor,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  CartData: any[]=[];
  total : number=0
  qt: number=0

 productData : any[]=[ {
  id: 1,
  name: 'Smartphone',
  price: 29999,
  description: 'A high-quality smartphone with great performance and camera.',
  image: 'https://via.placeholder.com/150',
  category: 'Electronics',
},
{
  id: 2,
  name: 'Laptop',
  price: 59999,
  description: 'A powerful laptop for work and gaming.',
  image: 'https://via.placeholder.com/150',
  category: 'Electronics',
},
{
  id: 3,
  name: 'T-Shirt',
  price: 999,
  description: 'A comfortable and stylish t-shirt.',
  image: 'https://via.placeholder.com/150',
  category: 'Clothing',
},
{
  id: 4,
  name: 'Headphones',
  price: 1999,
  description: 'Wireless headphones with noise cancellation.',
  image: 'https://via.placeholder.com/150',
  category: 'Electronics',
},
{
  id: 5,
  name: 'Shoes',
  price: 2499,
  description: 'Durable and comfortable running shoes.',
  image: 'https://via.placeholder.com/150',
  category: 'Footwear',
},
]

addToCart(product : any){

  const cartdata =  this.CartData.find(item=>item.id===product.id)

  if(cartdata)
  { 
    cartdata.quantity++
  }
  else{
    this.CartData.push({...product,quantity:1})
  }
  this.total =  product.price + this.total
  
  
}


}
