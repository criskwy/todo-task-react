import { createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  //cargar tareas task
  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={
        { tasks,
          createTask,
          deleteTask
        }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
