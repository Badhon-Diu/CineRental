import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./App.css";
import CartDetails from "./Components/CartDetails";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Contextapi from "./Context/Contextapi";
function App() {
  const [count, setCount] = useState(0);
  const [iscartmodal, setiscartmodal] = useState(false);

  function showmodal() {
    setiscartmodal(true);
  }
  function hidemodal() {
    setiscartmodal(false);
  }

  return (
    <>
      <div className="w-11/12 mx-auto"> 
        <Contextapi>
          <Toaster position="top-center" reverseOrder={false} />
          <Header showmodal={showmodal}></Header>

          {iscartmodal && <CartDetails hidemodal={hidemodal}></CartDetails>}

          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar></Sidebar>
              <Content></Content>
            </div>
          </main>

          <Footer></Footer>
        </Contextapi>
      </div>
    </>
  );
}

export default App;
