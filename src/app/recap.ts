const username:string = '1';

const sum = (a:number, b:number) =>{
  return a+b;
};

sum(1,2);


class Person2{
  age:number;
  lastName:string;

  constructor(age:number,lastName:string){
    this.age=age;
    this.lastName=lastName;
  }
}
class Person{
  constructor(public age:number, public lastName:string){}
}

const ruben = new Person(24,"fajardo");







