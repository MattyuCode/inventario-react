import { Routes, Route } from "react-router-dom";
import { About, Home, Login } from "../index";

export const MyRoutes = () => {
  return (
    //   <BrowserRouter>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    //</BrowserRouter>
  );
};
