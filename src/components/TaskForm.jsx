import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si ambos campos están vacíos
    if (title.trim() === "" || description.trim() === "") {
      alert("Por favor, complete ambos campos.");
      return; // Detiene la ejecución si los campos están vacíos
    }

    const newTask = {
      title: title,
      description: description,
    };

    createTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
        <h1 className="text-2xl text-white font-bold mb-3">Crea tu tarea</h1>
        <input
          type="text"
          placeholder="Ingrese una tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />

        <textarea
          placeholder="Describe la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button
        className="bg-indigo-500 px-3 py-1 text-white ">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
