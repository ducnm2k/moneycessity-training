import { useReducer, useRef } from "react";

// 1. INITIAL STATE
const initialState = {
  task: "",
  tasks: [],
};

// 2. ACTIONS
const SET_TASK = "set";
const ADD_TASK = "add";
const DEL_TASK = "del";

const setTask = (payload) => {
  return {
    type: SET_TASK,
    payload,
  };
};

const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

const delTask = (payload) => {
  return {
    type: DEL_TASK,
    payload,
  };
};

// 3. REDUCER
const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case SET_TASK:
      newState = {
        ...state,
        task: action.payload,
      };
      break;
    case ADD_TASK:
      newState = {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      break;
    case DEL_TASK:
      const newTasks = [...state.tasks];
      newTasks.splice(action.payload, 1);

      newState = {
        ...state,
        tasks: newTasks,
      };
      break;
    default:
      throw new Error("Invalid action");
  }

  //   console.log("State: ", state);
  //   console.log("Action: ", action);
  return newState;
};

// 4. DISPATCH
export default function UseReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { task, tasks } = state;

  const inputRef = useRef();

  const handleSubmit = () => {
    dispatch(addTask(task));
    dispatch(setTask(""));

    inputRef.current.focus();
  };

  return (
    <>
      <h1>TO DO LIST</h1>

      <input
        ref={inputRef}
        value={task}
        placeholder="Enter task.."
        onChange={(e) => {
          dispatch(setTask(e.target.value));
        }}
      />

      <button onClick={handleSubmit}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <span onClick={() => dispatch(delTask(index))}>&times;</span>
          </li>
        ))}
      </ul>
    </>
  );
}
