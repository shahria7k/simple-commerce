import React, { createContext, useState } from "react";
export const CartContext = createContext();

export default function CartProvider({ children }) {
	const [DB, setDB] = useState([]);
	const cart = { DB, setDB };
	return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
}
