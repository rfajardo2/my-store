import { Component } from '@angular/core';

import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Ruben';
  age = 24;
  img="https://avatars.githubusercontent.com/u/69486843?v=4"

  btnDisabled=true;
  persona={
    name:"ruben",
    age:24,
    avatar:"https://avatars.githubusercontent.com/u/69486843?v=4"
  }
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: './assets/images/house.jpg'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: './assets/images/glasses.jpg'
    }
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.persona.age += 1;
  }

  onScroll(event: Event){
    const element =event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  ChangeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.persona.name=element.value;
    console.log(element.value);
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
