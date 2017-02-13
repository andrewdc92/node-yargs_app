console.log('starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');


const notes = require('./notes.js');

const argv = yargs.argv;
var command = argv._[0];
console.log('Command: ', command);
console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("success! note created");
    notes.logNote(note);
  }
  else {
    console.log("there was a problem saving the note");
  }
}
  else if ( command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
}
  else if ( command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        notes.logNote(note);
    }
    else {
      console.log('note not found');
    }
  }
  else if ( command === 'remove') {
    var noteDestroyed = notes.removeNote(argv.title);
    var message = noteDestroyed ? 'Note was removed' : 'Note not found';
    console.log(message);
  }
else {
  console.log('Command not recognized');
}

//third argument is only necessary to handle errs that arise from fs syntax in chrome v7
