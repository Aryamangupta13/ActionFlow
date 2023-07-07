import React from "react";
import { Route, Routes } from "react-router";
import Welcome from "./pages/Welcome";
import Register from "./pages/Register";

const App=()=>{
  return(<>
     <Routes>
      <Route path="/" element={<Welcome/>}></Route>
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </>)
}

export default App;