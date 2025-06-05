import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const Moviecontext = createContext();

export default function Contextapi({ children }) {
  const [cartdata, setcardata] = useState([]);

  console.log(cartdata);
  
  function handleAddtoCart(e, item) {
    e.preventDefault();
    e.stopPropagation();

    const isexits = cartdata.find((movie) => movie.id === item.id);

    if (isexits) {
      toast.error("Item is already Added to Card.");
    } else {
      setcardata([...cartdata, item]);
    }
  }

  function Funcheckout() {
    
    if (cartdata.length > 0) {
      toast.success("Checkout Successfully !");
    } else {
      toast.error("Please Add Item to Card");
    }
  }

  function handleRemoveItem(item) {
    setcardata(
      cartdata.filter((singlecartitem) => singlecartitem.id !== item.id)
    );
  }

  const AllValue = {Funcheckout, cartdata, setcardata, handleAddtoCart, handleRemoveItem };

  return (
    <Moviecontext.Provider value={AllValue}>{children}</Moviecontext.Provider>
  );
}
