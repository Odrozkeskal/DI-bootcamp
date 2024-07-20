import { TodoList } from './todo';

const myTodoList = new TodoList();

myTodoList.addTask('Complete homework');
myTodoList.addTask('Buy groceries');
myTodoList.addTask('Walk the dog');

myTodoList.completeTask(0); 

myTodoList.listTasks();