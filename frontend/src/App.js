import React from "react";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import MainPage from "./components/Main page/mainpage";
import { Route, Routes } from "react-router-dom";
import Aktualnosci from "./components/Aktualnosci/Aktualnosci";
import Kontakt from "./components/Kontakt/Kontakt";
import Ofundacji from "./components/O Fundacji/Ofundacji";
import CoRobimy from "./components/Co Robimy/CoRobimy";
import WydarzenieOsobno from "./components/Aktualnosci/WydarzenieOsobno";
import Projekty from "./components/Co Robimy/Projekty";
import Dotacje from "./components/Co Robimy/Dotacje";
import Uslugi from "./components/Co Robimy/Uslugi";


function App() {
  return (
    <div>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/ofundacji" element={<Ofundacji />} />
        <Route path="/corobimy">
          <Route index element={<CoRobimy />} />
          <Route path="/corobimy/projekty" element={<Projekty />} />
          <Route path="/corobimy/dotacje" element={<Dotacje />} />
          <Route path="/corobimy/uslugi" element={<Uslugi />} />
        </Route>
        <Route path="/aktualnosci">
          <Route index element={<Aktualnosci />} />
          <Route path="/aktualnosci/:id" element={<WydarzenieOsobno />} />
        </Route>

        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>
      <Container fluid>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
