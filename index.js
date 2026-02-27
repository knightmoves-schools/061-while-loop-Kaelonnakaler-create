function markAsDone(todos){
  let i = 0;
  while(i < todos.length) {
    todos[i] = "done - " + todos [i];
    i++;
  }
  return todos;
}
const tasks = ["washes dishes", "clean room", "switch laundry"];



