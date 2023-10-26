import { Component } from '@angular/core';

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
