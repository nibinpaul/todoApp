import ACTIONS from "./action-types";

export const addTodo = (todo) => {
  console.log(todo, "todo");
  return (dispatch) => {
    dispatch({ type: ACTIONS.ADD_ITEM, payload: todo });
  };
};
export const editTodo = (todo) => {
  console.log(todo, "todo");
  return (dispatch) => {
    dispatch({ type: ACTIONS.EDIT_ITEM, payload: todo });
  };
};

export const toggleTodo = (id) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.ITEM_COMPLETION, payload: id });
  };
};
export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch({ type: ACTIONS.DELETE_ITEM, payload: id });
  };
};
