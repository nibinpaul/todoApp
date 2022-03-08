import { v1 } from "uuid";
import ACTIONS from "../actions/action-types";

const initialState = {
  items: [
    { id: "11", value: "learn react", completed: false, priority: 2 },
    { id: "12", value: "learn redux", completed: true, priority: 3 },
  ],
  editingItem: {},
};
const TodosReducer = (state = initialState, action) => {
  console.log(action, "action");
  switch (action.type) {
    case ACTIONS.ADD_ITEM: {
      const id = v1();
      const todoItem = {
        ...action.payload,
        id,
        completed: false,
      };
      console.log(todoItem, "items");
      return { ...state, items: [...state.items, todoItem] };
    }

    case ACTIONS.CANCEL_EDIT_ITEM: {
      const newState = state.items.length
        ? { ...state, editingItem: {} }
        : { ...state };
      return newState;
    }

    case ACTIONS.DELETE_ITEM: {
      const items = state.items.filter(({ id }) => id !== action.payload);
      return { ...state, items };
    }

    case ACTIONS.EDIT_ITEM: {
      const items = state.items.map((item) => {
        if (item.id === action.payload.id) {
          // item.value = action.payload.modifiedItem.value;
          item = { ...item, ...action.payload };
        }

        return item;
      });

      return { ...state, items, editingItem: {} };
    }

    case ACTIONS.ITEM_COMPLETION: {
      const items = state.items.map((item) => {
        if (item.id === action.payload) {
          const newItem = { ...item };
          newItem.completed = !newItem.completed;
          return newItem;
        }

        return item;
      });

      return { ...state, items };
    }

    case ACTIONS.SELECT_EDIT_ITEM: {
      const item = state.items.find(({ id }) => id === action.payload.id);
      return { ...state, editingItem: item };
    }

    default: {
      return state;
    }
  }
};

export default TodosReducer;
