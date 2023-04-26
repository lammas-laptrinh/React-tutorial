import TodoList from './TodoList';
import { TodoProvider } from './Todo';
import TodoSummary from './TodoSumary';

const AppTodo = () => {
  return (
    <TodoProvider>
      <TodoSummary />
      <TodoList />
    </TodoProvider>
  );
};

export default AppTodo;
