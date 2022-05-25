import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/common/Header";
import HomePge from "./pages/HomePge";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CarsListPage from "./pages/CarsListPage";
import CustomersListPage from "./pages/CustomersListPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePge />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/cars" element={<CarsListPage />} />
        <Route path="/customers" element={<CustomersListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
