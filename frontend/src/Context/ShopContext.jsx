
import { useEffect } from "react";
import { createContext,useContext, useState } from "react";
// import all_product from "../assets/all_product";  
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300+1; i++) {
    cart[i] = 0;
  }
  return cart;
};




export const ShopContext = createContext(); 

const ShopContextProvider = ({ children }) => {
  const [all_product, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  useEffect(() => {
   fetch('http://localhost:4000/allproducts').then((res)=> res.json()).then((data)=> setAllProducts(data));
   
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:400/getcart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: "",
      }).then((res) => res.json()).then((data) => setCartItems(data));
    }
  },[])


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/addtocart', {
        method: "POST",
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId })
      }).then((res) => res.json()).then((data) => console.log(data));
    }
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => ({
      ...prev, [id]: prev[id] - 1
    }))
     if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/removefromcart', {
        method: "POST",
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "id": id })
      }).then((res) => res.json()).then((data) => console.log(data));
    }
    
  }
  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item)
        )
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  } 


  const contextValue = { all_product, cartItems,addToCart, removeFromCart,getTotalAmount ,getTotalCartItems};
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
}
export default ShopContextProvider;