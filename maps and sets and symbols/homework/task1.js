class DB {
    constructor(){
      this.database = new Map();
    }
  
    create(data){

        if ((data instanceof Object) === false){
            throw new error('input is not an object')
        }
        else{
      const uniqueID = Symbol('id');
      this.database.set(uniqueID, data);

      return uniqueID;
    }
    }
  
    read(id){

            if(typeof id !== 'string'){
                throw new error ('type of id is invalid ')
            }
            else if (is=== null){
                throw new error ('you have to pass param')
            }

      else if(this.database.has(id)){
        const person = {
          ...this.database.get(id),
          id: id
        }
        return person;
    }
      else if (this.database.has(id)===false){
      return null;
    }
    }
  
    update(id, updatedValues){
      if (typeof id !=='string'){
          throw new error('id is not a string')
      }
      else if (updatedValues instanceof Object === false){
          throw new error ( '2nd param is not and object')
      }
      else if(this.database.has(id)===false){
          throw new error ('id is not valid')
      }
      else{
        const person = {
          ...this.database.get(id),
          ...updatedValues
        }
        this.database.set(id, person);
        return id;
      }
    }
  
    delete(id){
      const hasBeenDeleted = this.database.delete(id);
      if(hasBeenDeleted){
        return true;
      }
      else {
       throw new error ('id is non-existant')
      }
    }
  
    getAll(x){
        if(x!=null){
            throw new error('no param needed')
        }else {
      return Array.from(this.database.values())
    }
      
    }
  }
  
  const person = {
      name: 'Pitter', // required field with type string
      age: 21, // required field with type number
      country: 'ge', // required field with type string
      salary: 500 // required field with type number
  };
  
  



 
  
  const db = new DB();
  console.log(db);
  const userID = db.create(person);
  const user = db.read(userID);
  console.log("READ", db.read(user.id));
  db.update(user.id, { age: 22, name: 'Oto' });
  console.log("READ", db.read(user.id));
  console.log("delete", db.delete(user.id));
  db.getAll();




