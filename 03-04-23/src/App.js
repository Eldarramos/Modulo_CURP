import './App.css';
import Login from './Login';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home';
import Formulario from './component/Form';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path='/Formulario' element={<Formulario/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
