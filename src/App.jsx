import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import PopUp from "./components/PopUp";
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function addTasks(task) {
    setTasks([
      ...tasks,
      {
        title: task,
      },
    ]);
    setTask("");
  }

  const search = tasks.filter((task) => task.title.includes(inputValue));

  return (
    <>
      <div className="w-[53.6%] h-screen flex flex-col items-center mx-auto">
        <Header inputValue={inputValue} setInputValue={setInputValue} />
        <Tasks
          task={task}
          setIsOpen={setIsOpen}
          tasks={tasks}
          search={search}
        />
        <PopUp
          task={task}
          setTask={setTask}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          addTasks={addTasks}
        />
      </div>
    </>
  );
}

export default App;
//mx-auto: it menas margin left and margin right auto so it center the main container
//items-center:it centers the children in the container
