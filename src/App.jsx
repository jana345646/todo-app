import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <>
      <div className="w-[53.6%] h-screen flex flex-col items-center mx-auto">
        <Header />
      </div>
    </>
  );
}

export default App;
//mx-auto: it menas margin left and margin right auto so it center the main container
//items-center:it centers the children in the container
