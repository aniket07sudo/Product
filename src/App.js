import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './component/Navbar';
import {Route,Routes} from "react-router-dom";
import Product from './Pages/Products';
import ModalComponent from './component/Modal';
import { useState } from 'react';


function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="App">
        <Navbar />
        <ModalComponent show={show} handleClose={handleClose} handleShow={handleShow} />
        <Routes>
          <Route path="/" element={<Product handleShow={handleShow} />}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
