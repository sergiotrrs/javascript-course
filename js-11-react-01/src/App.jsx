import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Footer } from "./components/footer/Footer";
import { MainContent } from "./components/main/MainContent";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar src="/img/dinosaurio.jpg" alt="Dino programador" />
      <Routes>
        {/* Comentario en JSX */}
        <Route path="/" element={<MainContent src="miProp" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="*" element={<h1>404 NoFound</h1>} />
      </Routes>
      <Footer year="2025" cohorte={50} inLove={false} />
    </BrowserRouter>
  );
}

export default App;
