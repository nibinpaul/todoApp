import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTodo, editTodo } from "../actions/todo";

const AddTodo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [itemValue, setItemValue] = useState("");
  const [valueError, setValueError] = useState(false);
  const [itemPriority, setItemPriority] = useState(2);

  const list = useSelector((state) => state.toDo?.items);
  const handleItemChange = (ev) => setItemValue(ev.target.value);
  const handlePriorityChange = (ev) => setItemPriority(ev.target.value);
  const handleSubmitAndResetForm = (ev) => {
    ev.preventDefault();
    if (itemValue) {
      if (id)
        dispatch(editTodo({ id, value: itemValue, priority: itemPriority }));
      else dispatch(addTodo({ value: itemValue, priority: itemPriority }));
      navigate("/");
    } else {
      setValueError("Item should not be empty");
    }
  };
  useEffect(() => {
    if (id) {
      const editData = list.find((item) => item.id === id);
      if (editData) {
        setItemValue(editData.value);
        setItemPriority(editData.priority);
      }
    }
  }, [id, list]);

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row  d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>

                <div className="add-wrapper">
                  <form onSubmit={handleSubmitAndResetForm}>
                    <div className="add-items row">
                      <div class="col-md-4">
                        <input
                          type="text"
                          className="form-control todo-list-input"
                          placeholder="What do you need to do today?"
                          onChange={handleItemChange}
                          value={itemValue}
                        />
                        <div class="invalid-feedback">{valueError}</div>
                      </div>
                      <div class="col-md-4">
                        <select
                          className="form-control "
                          id="exampleFormControlSelect1"
                          value={itemPriority}
                          onChange={handlePriorityChange}
                        >
                          <option value={1}>Low</option>
                          <option value={2}>Medium</option>
                          <option value={3}>High</option>
                        </select>
                      </div>
                      <div class="col-md-2">
                        <button className="add btn btn-primary font-weight-bold todo-list-add-btn">
                          {id ? "Update" : "Add"}
                        </button>
                      </div>
                      <div class="col-md-2">
                        <button
                          className="add btn btn-secondary font-weight-bold todo-list-add-btn"
                          type="button"
                          onClick={() => navigate("/")}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddTodo;
