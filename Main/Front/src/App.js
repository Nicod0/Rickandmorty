import "./App.css";
import Detail from "./components/Detail/Detail";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "niicodperez@gmail.com";
  const username2 = "1234@gmail.com";
  const password = "manuel12";

  function login(userData) {
    if (
      userData.password === password &&
      (userData.username === username || userData.username === username2)
    ) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("login failed");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (id) => {
    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`http://localhost:3001/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("algo salió mal");
        }
      });
  };

  const participantes = ["Juan", "Alejo", "Milton", "Nico"];
  const nico = 0;
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={
            <Home
              characters={characters}
              onClose={onClose}
              onSearch={onSearch}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
