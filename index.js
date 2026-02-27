let todos = ['Red', 'Blue', 'Green',];

function markAsDone(todos){
  while (let i = 1; i < todos.length; i++) {
    todos[i] = 'done -' + todos[i];
  }
  return todos;
}

