const notes = [
  {
    id: 1,
    description: "Workout program",
    todos: [
      {
        id: 1,
        name: "Push ups - 10 x 3",
        done: false,
      },
      {
        id: 2,
        name: "Abdominals - 20 x 3",
        done: true,
      },
      {
        id: 3,
        name: "Tapis Roulant - 15min",
        done: true,
      },
    ],
  },
  {
    id: 2,
    description: "Front-end Roadmap",
    todos: [
      {
        id: 1,
        name: "Learn HTML",
        done: true,
      },
      {
        id: 2,
        name: "Learn CSS",
        done: true,
      },
      {
        id: 3,
        name: "Learn JavaScript",
        done: true,
      },
      {
        id: 4,
        name: "Learn Angular",
        done: false,
      },
    ],
  },
];



function uncompletedNotes(notes) {
  const uncompletedTodos = [];

  notes.forEach(note => {                                                  
    const uncompletedTodosNote = note.todos.filter(todo => !todo.done);    
    uncompletedTodos.push(uncompletedTodosNote.map(todo => todo.name));
  });

  return uncompletedTodos;
}

const uncompleted = uncompletedNotes(notes);
console.log(uncompleted);



/*
Riga 54: Creo un array vuoto chiamato uncompletedTodos
Riga 56: Ciclo l'array notes
Riga 57: Utilizzo il metodo filter() per filtrare tutte le todo incomplete, utilizzo ! (not) per definire le todo che sono false (!true)
Riga 58: Utilizzo il metodo push() per inserire gli elementi alla fine dell'array
         Utilizzo il metodo map() per restituire un nuovo array con i soli nomi delle todo incomplete
*/


