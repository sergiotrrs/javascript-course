import './App.css'
import { Footer } from './components/footer/Footer';
import { MainContent } from './components/main/MainContent';
import { Navbar } from './components/navbar/Navbar';

function App() {
 
  return (
    <>
      <Navbar src="/img/dinosaurio.jpg" alt="Dino programador" />
      <img src="https://via.placeholder.com/800x300" alt="imagen de prueba" />
      <MainContent />

      <Footer />
      
    </>

  )
}

export default App;
