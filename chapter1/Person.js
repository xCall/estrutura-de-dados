 class Person {
   constructor(name) {
     this._name = name;
   }

   get name(){
     return this._name;
   }
   set name(value) {
     this._name = value;
   }
 }

 let lotrChar =  new Person('frodo');

 console.log(lotrChar);

 lotrChar.name = 'gandalf';

 console.log(lotrChar);
