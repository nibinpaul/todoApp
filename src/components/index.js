import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTodo } from "../actions/todo";
import Item from "./item";

const TodoList = () => {
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState(false);
  const list = useSelector((state) => state.toDo?.items);
  const triggerDelete = () => {
    dispatch(deleteTodo(deleteId));
    setDeleteId(false);
  };
  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Todo list</h4>
                <div className="add-item-button d-flex">
                  <Link
                    className="add btn btn-primary font-weight-bold todo-list-add-btn"
                    to="./add"
                  >
                    Add
                  </Link>
                </div>
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    {list.map((item) => (
                      <Item key={item.id} item={item} onDelete={setDeleteId} />
                    ))}
                  </ul>
                  {list.length === 0 && <p>Todo list is empty</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {deleteId && (
        <div id="id01" className="modal" style={{ display: "block" }}>
          <form className="modal-content">
            <div className="container">
              <h1>Delete Todo</h1>
              <p>Are you sure you want to delete?</p>

              <div className="clearfix">
                <button
                  type="button"
                  className="cancelbtn"
                  onClick={() => setDeleteId(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="deletebtn"
                  onClick={triggerDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
export default TodoList;
