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
  const [iscartmodal, setiscartmodal] = useState(false);
  const [isdark, setisdark] = useState(false);

  function toggle() {
    setisdark(!isdark);
  }
  //const { isdark } = useContext(Theme);
  function showmodal() {
    setiscartmodal(true);
  }
  function hidemodal() {
    setiscartmodal(false);
  }

  return (
    <>
      <div className={isdark ? "dark" : ""}>
        <div className="w-11/12 mx-auto ">
          <Contextapi>
            <Toaster position="top-center" reverseOrder={false} />
            <Header
              toggle={toggle}
              isdark={isdark}
              showmodal={showmodal}
            ></Header>

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
      </div>
    </>
  );
}

export default App;
