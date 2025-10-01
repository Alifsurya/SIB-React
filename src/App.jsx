import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages";
import Books from "./Pages/books";
import Tim from "./Pages/tim";
import Kontak from "./Pages/kontak";
import Login from "./Pages/auth/login";
import Register from "./Pages/auth/register";

function App() {
  const customStyles = `
    .team-card {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: none;
    }

    .team-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15) !important;
    }

    .team-card .card-img-top {
      height: 350px;
      object-fit: cover;
      object-position: center;
    }
  `;

  return (
    <>
      <style>{customStyles}</style>
      <div className="container" style={{ paddingTop: "80px" }}></div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="tim" element={<Tim />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
