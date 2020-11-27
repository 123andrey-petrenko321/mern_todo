import axios from "axios";

const API_URL="http://localhost:3000/todos/"
const API_URL_SUB="http://localhost:3000/nesttodos/"



async function createTodo(task) {
  const { data: newTask } = await axios.post(API_URL,
    task
  );
  return newTask;
}

async function deleteTodo(id) {
  const message = await axios.delete(`${API_URL}${id}`);
  return message;
}

async function updateTodo(id, task) {
  const {data:newTodo} = await axios.put(`${API_URL}${id}`, task);
  return newTodo;
}

async function getAllTodos() {
  const { data: todos } = await axios.get(API_URL);
  return todos;
}

async function getAllSubTodos() {
  const { data: todos } = await axios.get(API_URL_SUB);
  return todos;
}

export default {createTodo, deleteTodo, updateTodo, getAllTodos,getAllSubTodos};
