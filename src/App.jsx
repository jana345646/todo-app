import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import PopUp from "./components/PopUp";
import Header from "./components/Header";
function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [checked, setChecked] = useState(false);
  const [filteredMenue, setFilteredMenue] = useState("All");

  function addTasks(task) {
    setTasks([
      ...tasks,
      {
        title: task,
        check: checked,
      },
    ]);
    setTask("");
  }

  // const search = tasks.filter((task) => task.title.includes(inputValue));

  // const selected = tasks.filter((task) => {
  //   //this function only dispaly the tasks that matches the condition
  //   if (filteredMenue === "Complete") return task.check === true;
  //   if (filteredMenue === "InComplete") return task.check === false;
  //   return true;
  // });

  const filteredTasks = tasks.filter((task) => {
    const search = task.title.includes(inputValue);

    const Fmenue =
      filteredMenue === "Complete"
        ? task.check === true
        : filteredMenue === "InComplete"
          ? task.check === false
          : true;

    return search && Fmenue;
  });

  function toggleTask(title) {
    //this function changes the value of check
    setTasks(
      tasks.map((task) =>
        task.title === title ? { ...task, check: !task.check } : task,
      ),
    );
  }

  return (
    <>
      <div className="w-[53.6%] h-screen flex flex-col items-center mx-auto">
        <Header
          inputValue={inputValue}
          setInputValue={setInputValue}
          setFilteredMenue={setFilteredMenue}
          filteredMenue={filteredMenue}
        />
        <Tasks
          task={task}
          setIsOpen={setIsOpen}
          tasks={tasks}
          // search={search}
          // selected={selected}
          toggleTask={toggleTask}
          filteredTasks={filteredTasks}
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
