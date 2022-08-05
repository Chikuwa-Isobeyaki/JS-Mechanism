window.name = 'John'


const person = {
  name: 'Tom',
  hello: function() {
    console.log('Hello ' + this.name);
    const a = () => console.log('Bye ' + this.name); //=>Bye Tom
    a();
  }
}

person.hello(); //=>Hello John

function b() {
  const a = () => console.log('Bye ' + this.name);
  a();
}

b();//=>Bye John
