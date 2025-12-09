import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import User1 from "./pages/User1.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/User1" element={<User1 />} />

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/User1" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
