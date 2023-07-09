import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Product from "./component/Product";
import ProductList from "./component/ProductData";
import ContactForm from "./component/ContactForm";
import Nomatch from "./component/Nomatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/slug=:slug" element={<ProductList />} />
          <Route path="/contact" element={<ContactForm />}/>
          <Route path="/*" element={<Nomatch />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
