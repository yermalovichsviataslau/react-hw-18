import {  useEffect, useState } from "react";
import "./App.css";
import ToggleTheme from "./components/ToggleTheme";
import Basket from "./components/Basket";
import Items from "./components/Items";
import LoginForm from "./components/loginForm";
import StorageInfo from "./components/StorageInfo";


function App() {
  const [info, setInfo] = useState({
    loginCookie: document.cookie,
    cartSession: sessionStorage.getItem('cart'),
    loginLocal: localStorage.getItem('user_login')
  })

  useEffect(()=>{updateInfo}, [])

  const updateInfo =()=>{
    setInfo({
      loginCookie: document.cookie || 'пусто',
      cartSession: sessionStorage.getItem("cart") || 'пусто',
      loginLocal: localStorage.getItem('user_login') || 'пусто'
    })
  }

  const [login, setLogin] = useState('')

  const inputLogin =(value)=>{
    setLogin(value)
  }

  const saveTokin = ()=>{
    document.cookie = `token=${login}; path=/`;
    setLogin('')
  }

  const deleteTokin =()=>{
    document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }

  const [cart, setCart] = useState(()=> {
    const saveCart = sessionStorage.getItem("cart")
    return saveCart ? JSON.parse(saveCart) : []
  });

  useEffect(()=> {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: updatedCart[existingItemIndex].quantity + 1,
        };
        return updatedCart;
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleDecrease = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === item.id,
      );

      if (existingItemIndex !== -1) {
        const currentItem = prevCart[existingItemIndex];
        if (currentItem.quantity > 1) {
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex] = {
            ...currentItem,
            quantity: currentItem.quantity - 1,
          };
          return updatedCart;
        } else {
          return prevCart.filter((cartItem) => cartItem.id !== item.id);
        }
      }

      return prevCart;
    });
  };

  const clearBasket = () => {
    setCart([]);
  };

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("app-theme") || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const switchTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ToggleTheme theme={theme} switchTheme={switchTheme} />
      <Items onAdd={handleAddToCart} />
      <Basket
        cart={cart}
        addItem={handleAddToCart}
        handleDecrease={handleDecrease}
        clearBasket={clearBasket}
      />

      <LoginForm  login={login} inputLogin={inputLogin} saveTokin={saveTokin} deleteTokin={deleteTokin}/>
      <StorageInfo info={info} updateInfo={updateInfo}/>
    </>
  );
}

export default App;
