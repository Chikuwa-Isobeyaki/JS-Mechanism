function a(name) {
  return 'hello ' + name;
}

const b = (name, name1) =>  'hello ' + name + ' ' + name1;

const c = () => {
  return 'hello';
}

console.log(b('Tom', 'Bob'));
