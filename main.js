console.clear();

//do while
let result = "";
let i = 0;

do {
  i++;
  result = result + i;
} while (i <= 1000);

console.log(result);

//array

class person {
  constructor(firstName, lastName, birthDate, gender){
    this.firstName = "Jane",
    this.lastName = "Doe",
    this.birthDate = "Jan 5, 1925",
    this.gender = "female"
  }
}

function key() {
  console.log(Object.keys(key));
}

function detail() {
  for (const [key, value] of Object.entries(key)) {
    console.log(`${key}: ${value}`);
  }
}

function personsOfArray() {
  class person1 {
    constructor(firstName, lastName, birthDate, gender){
      this.firstName = "Jay",
      this.lastName = "Door",
      this.birthDate = "Feb 6, 1999",
      this.gender = "female"
    }
  }

  class person2 {
    constructor(firstName, lastName, birthDate, gender){
      this.firstName = "Jade",
      this.lastName = "Doob",
      this.birthDate = "Jan 5, 1906",
      this.gender = "female"
    }
  }

  class person3 {
    constructor(firstName, lastName, birthDate, gender){
      this.firstName = "Jake",
      this.lastName = "Don",
      this.birthDate = "Jan 9, 1944",
      this.gender = "male"
    }
  }

  for(i = 0; i < 5; i++) {
    if(i % 2 != 0) {
      console.log(i)
    }
  }
}

 