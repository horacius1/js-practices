'use strict';
var person ={
    name:'piir'
};
Object.preventExtensions(person);
person.age=21
console.log(person.obj.age)