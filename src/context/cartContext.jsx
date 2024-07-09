import { createContext, useContext, useState } from "react";

import { useEffect } from "react";

const CartContext = createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  totalCount: 0,
  cartTotal: 0,
  doesItemExist: () => {},
  subtractCartItem: () => {},
  data: []
})

const CartProvider = () => {
  const [cartItems,setCartItems] = useState([]);
  const [data, setData] = useState([]);


  const apiCall = (setData) => {
    axios.get('http://localhost:3001/all').then((response) => {
      //this console.log will be in our frontend console
      const data = response.data.data;
      let pl = []
      for (let i=0;i<data.length;i++) {
        pl.push({id:i,name:data[i].NAME,ppl:data[i].PPL,volume:data[i].VOLUME,first:data[i].FIRST,second:data[i].SECOND,third: data[i].THIRD,plastic:data[i].PLASTIC,glass:data[i].GLASS,image:data[i].IMAGE,category:data[i].CATEGORY,capacity:data[i].CAPACITY})
      }
      // let pla = []
      // for (let x=0;x<sorts.length;x++) {
      //   pla.push(pl.filter(product => product.category === sorts[x]))
      // }
      setData(pla)
    })
  }

  useEffect(() => {
      apiCall(setData)
    }, [])
  
  const addCartItem = (product, quantity) => {
    const existingCartItemIndex = cartItems.findIndex((obj) => obj.product.name === product.name);
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

	const subtractCartItem = (product, quantity) => {
    const existingCartItemIndex = cartItems.findIndex((obj) => obj.product.name === product.name);
    if (existingCartItemIndex !== -1) {
			if (cartItems[existingCartItemIndex].quantity > 1) {
				const existingCartItem = cartItems[existingCartItemIndex];
				const tobeChangedQuantity = existingCartItem.quantity - quantity
				const updatedCartItem = {
					...existingCartItem,
					tobeChangedQuantity,
				};
				const updatedCartItems = [...cartItems];
				updatedCartItems[existingCartItemIndex] = updatedCartItem;
				setCartItems(updatedCartItems);
			}
    }
  };


	const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.name !== product.name
    );
    setCartItems(updatedCartItems);
  };

	const doesItemExist = (product) => {
		// const existingCartItemIndexy = cartItems.findIndex((obj) => obj.product.name === product.name);
		const existingCartItem = cartItems.some((obj) => obj.product.name === product.name);
		return existingCartItem;
	}

	const cartTotal = cartItems.reduce((total, item) => total + (item.product.ppl*item.product.volume) * item.quantity,0);

	const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);


	return (
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        removeFromCart,
        cartCount,
        cartTotal,
				doesItemExist,
				subtractCartItem,
        data
      }}
    >
      {children}
    </CartContext.Provider>
  );
  
}