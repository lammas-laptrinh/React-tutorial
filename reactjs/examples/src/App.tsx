import React from "react";
import useColor from "./hooks/useColor";
import TaskList from "@src/components/Task/TaskList";
import { TaskProvider } from "@src/context/TaskContext";

const App = () => {
  const { color, randomColor } = useColor();
  console.log(color);

  return (
    // <Sidebarr />;
    // <Menu></Menu>
    // <Form></Form>
    // <FormSignIn />
    // <ErrorBoundary>
    //   <DashboardMain />
    // </ErrorBoundary>
    // <div
    //   className="h-screen w-screen flex items-center justify-center"
    //   style={{ backgroundColor: "#" + color }}
    // >
    //   <button
    //     className="p-8 rounded-xl flex items-center justify-center outline-none outline-0 border-none focus:border-none"
    //     style={{
    //       backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
    //     }}
    //     onClick={randomColor}
    //   >
    //     Click me
    //   </button>
    // </div>

    <TaskProvider>
      <TaskList />
    </TaskProvider>
  );
};

export default App;
