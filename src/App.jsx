import { useState } from "react";
import { useEffect } from "react";
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
  const [editId, setEditId] = useState(null); //we use to can diplay the input ei the edit mood only
  const [editText, setEditText] = useState(""); // this to save the edited text
  const [dark, setDark] = useState(false); // we create a state for darkmode to save if it is true or false and when its value changes

  useEffect(() => {
    //useeEfect as it is not releated to the ui , it render after the ui
    document.documentElement.classList.toggle("dark", dark); //it catches the html element and add a class named dark to it if it is true and if it is false it didn't add it
  }, [dark]);

  function addTasks(task) {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
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

  function startEdit(task) {
    setEditId(task.id);
    setEditText(task.title);
  }

  function saveEdit() {
    setTasks(
      tasks.map((task) =>
        task.id === editId ? { ...task, title: editText } : task,
      ),
    );

    setEditId(null);
    setEditText("");
  }

  const deletedTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };
  return (
    <>
      <div className="w-full dark:bg-[#252525]">
        <div className="w-[53.6%] h-screen flex flex-col items-center mx-auto ">
          <Header
            inputValue={inputValue}
            setInputValue={setInputValue}
            setFilteredMenue={setFilteredMenue}
            filteredMenue={filteredMenue}
            setDark={setDark}
            dark={dark}
          />
          <Tasks
            task={task}
            setIsOpen={setIsOpen}
            tasks={tasks}
            // search={search}
            // selected={selected}
            toggleTask={toggleTask}
            filteredTasks={filteredTasks}
            deletedTask={deletedTask}
            startEdit={startEdit}
            saveEdit={saveEdit}
            editId={editId}
            editText={editText}
            setEditText={setEditText}
            dark={dark}
          />
          <PopUp
            task={task}
            setTask={setTask}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            addTasks={addTasks}
          />
        </div>
      </div>
    </>
  );
}
export default App;
//mx-auto: it menas margin left and margin right auto so it center the main container
//items-center:it centers the children in the container
