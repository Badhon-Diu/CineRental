import { useContext } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shoppingcart from "../assets/shopping-cart.svg";
import { Moviecontext } from "../Context/Contextapi";
export default function Header({ showmodal, isdark , toggle }) {
  const { cartdata } = useContext(Moviecontext);
  return (
    <>
      <header>
        <nav className="container flex items-center justify-between space-x-10 py-6">
          <a href="index.html">
            <img src={logo} width={139} height={26} alt="" />
          </a>
          <ul className="flex items-center space-x-5">
            <li>
              <a
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={ring} width={24} height={24} alt="" />
              </a>
            </li>
            <li>
              <a onClick={toggle}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={isdark ? sun : moon} width={24} height={24} alt="" />
              </a>
            </li>
            <li>
              <a
                onClick={showmodal}
                className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
                href="#"
              >
                <img src={shoppingcart} width={24} height={24} alt="" />
                {cartdata.length > 0 && (
                  <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12CF6F] text-white text-center p-[1px] w-[28px] h-[28px]">
                    {cartdata.length}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
