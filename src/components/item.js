import Icon from "@mdi/react";
import { mdiCalendarEdit, mdiClose } from "@mdi/js";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../actions/todo";
import { useState } from "react";
import Badge from "./badge";
import PriorityBadge from "./badge";

const Item = ({ item, onDelete }) => {
  const dispatch = useDispatch();
  const changeStatus = (e) => {
    dispatch(toggleTodo(item.id));
  };
  return (
    <>
      <li className={item.completed ? "completed" : ""} key={item.id}>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="checkbox"
              type="checkbox"
              onChange={changeStatus}
              checked={item.completed}
            />
            {item.value}

            <i className="input-helper"></i>
          </label>
        </div>
        {<PriorityBadge priority={item.priority} />}
        <div className="actions">
          <Link to={`/edit/${item.id}`} className="remove">
            <Icon path={mdiCalendarEdit} title="Edit" size={1} />
          </Link>
          <Icon
            path={mdiClose}
            title="Edit"
            size={1}
            className="delete"
            onClick={() => onDelete(item.id)}
          />
        </div>
      </li>
    </>
  );
};
export default Item;
