// var names = ['Bill', 'Dave', 'Steve'];

// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => console.log('arrowFunc', name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Dave'));
//
// var person = {
//   name: 'Andrew',
//   greet: function() {
//     names.forEach ((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

function add (a,b) {
  return a+b;
}

var addStatement = (a,b) => {
  return a+b;
};

var addExpression = (a,b) => a+b;

console.log('Traditional',add(1,3));
console.log('Traditional',add(9,0));

console.log('Statement',addStatement(1,3));
console.log('Statement',addStatement(9,0));

console.log('Expression',addExpression(1,3));
console.log('Expression',addExpression(9,0));
