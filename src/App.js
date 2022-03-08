import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TodoList from "./components";
import AddEditTodo from "./components/addEditForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="add" element={<AddEditTodo />} />
        <Route path="edit/:id" element={<AddEditTodo />} />
      </Routes>
    </div>
  );
}

export default App;
