// var obj = {
//   name: 'Andrew'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name": "Andrew", "age": 24}';
// var person = JSON.parse(personString);

const fs = require('fs');

var originalNote = {
  title: 'Some title',
  body: 'Some content'
};
var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString)

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
