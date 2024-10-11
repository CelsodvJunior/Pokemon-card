import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home/index.jsx";
import NewCard from "./pages/NewCard";

const AppRouters = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/newcard" element={<NewCard />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouters;
