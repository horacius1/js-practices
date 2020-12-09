class Validator {


    isDomain(Domain) {
      let re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/g);
      if (Domain.match(re)) {
        return true;
      }
      return false;
  
    }
    isEmail(Email) {
      let re = new RegExp(/\S+@\S+\.\S+/g);
      if (Email.match(re)) {
        return true;
      }
      return false;
  
    }
    isDate(Date) {
      let re = new RegExp(/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/g);
      if (Date.match(re)) {
        return true;
      }
      return false;
  
    }
    isPhone(Phone) {
      let re = new RegExp(/^\+?[0-9]{3}-?[0-9]{6,12}$/g);
      if (Phone.match(re)) {
        return true;
      }
      return false;
  
    }
  
  
  }
  
  var validator = new Validator();
  
  console.log(validator.isEmail('jshtml@mail.ru'));
  console.log(validator.isDomain('jshtml.net'));
  console.log(validator.isDate('12/05/2020'));
  console.log(validator.isPhone('+995599518681')); // it can be format of your country


const set = new Set();

set.add(5);
set.add('5');

console.log(set);




