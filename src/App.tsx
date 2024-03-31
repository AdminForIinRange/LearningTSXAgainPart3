


import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import { Container } from "react-bootstrap";
import NewNote from "./pages/NewNote.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewNote />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
  )
}

export default App






{
  /* <Route path="/:id">
      <Route index element={<Show />} />
        <Route path="edit" element={<Edit />} />
      </Route> */
}
