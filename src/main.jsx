import { StrictMode } from "react"; //this is a component in react that runs only in the development stage , to find errors early , ..
import { createRoot } from "react-dom/client"; //this is a function in react that creats a root to connect the html file with the react project
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
