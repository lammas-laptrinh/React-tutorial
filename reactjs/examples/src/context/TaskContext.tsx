import React, { createContext, useContext, useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleCompleted: (id: number) => void;
};

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  deleteTask: () => {},
  toggleCompleted: () => {},
});

export const useTasks = () => useContext(TaskContext);

// Component Provider
export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Khởi tạo danh sách công việc ban đầu
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Exercise Session 1", completed: false },
    { id: 2, title: "Exercise Session 2", completed: false },
    { id: 3, title: "Exercise Session 3", completed: false },
    { id: 4, title: "Exercise Session 4", completed: false },
    { id: 5, title: "Exercise Session 5", completed: false },
  ]);

  const deleteTask = (id: number) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Hàm đánh dấu công việc là hoàn thành hoặc chưa hoàn thành
  const toggleCompleted = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Gán giá trị cho Context Provider
  const value: TaskContextType = {
    tasks,
    deleteTask,
    toggleCompleted,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
