import React, { useContext, useCallback, useReducer } from "react";

// Khai báo kiểu cho state
export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type TodoState = {
  todos: Todo[];
};

// Khai báo các hành động thay đổi state
export type AddTodoAction = {
  type: "ADD_TODO";
  payload: {
    text: string;
  };
};

export type ToggleTodoAction = {
  type: "TOGGLE_TODO";
  payload: {
    id: number;
  };
};

export type TodoAction = AddTodoAction | ToggleTodoAction;

// Khởi tạo state và reducer
const initialState: TodoState = {
  todos: [],
};

const todoReducer = (state: TodoState, action: TodoAction): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [
          ...state.todos,
          {
            id: state.todos.length + 1,
            text: action.payload.text,
            completed: false,
          },
        ],
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

// Khai báo Context và Provider
export type TodoContextValue = {
  state: TodoState;
  actions: {
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
  };
};

const TodoContext = React.createContext<TodoContextValue>({
  state: initialState,
  actions: {
    addTodo: () => {},
    toggleTodo: () => {},
  },
});

export const useTodoContext = () => {
  return useContext(TodoContext);
};

type TodoProviderProps = {
    children: React.ReactNode;
  }
export const TodoProvider: React.FC <TodoProviderProps>= ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const actions = {
    addTodo: useCallback(
      (text: string) => {
        dispatch({ type: "ADD_TODO", payload: { text } });
      },
      [dispatch]
    ),
    toggleTodo: useCallback(
      (id: number) => {
        dispatch({ type: "TOGGLE_TODO", payload: { id } });
      },
      [dispatch]
    ),
  };

  const value = {
    state,
    actions,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};
