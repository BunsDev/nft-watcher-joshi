import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import NftDetail from './components/NftDetail';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col min-h-screen justify-between">
      <BrowserRouter>
      <Header></Header>
      <div className="flex">
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/Nft/:contractAddress" element={ <NftDetail/>} />
        </Routes>
      </div>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
