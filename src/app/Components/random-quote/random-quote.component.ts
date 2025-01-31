import { Component } from '@angular/core';

@Component({
  selector: 'app-random-quote',
  imports: [],
  templateUrl: './random-quote.component.html',
  styleUrl: './random-quote.component.css'
})
export class RandomQuoteComponent {
  quotes : any = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Happiness depends upon ourselves.", author: "Aristotle" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" }
  ];

  randomtext =this.randomequote()

  randomequote()
  {
    let random = this.quotes[Math.floor(Math.random()*this.quotes.length)]
    return random
  }
  onclick()
  {
    this.randomtext = this.randomequote()
  }

  

}
