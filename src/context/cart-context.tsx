'use client';

import { ReactNode, createContext, useContext, useState } from 'react';

interface ICartItems {
	productId: number;
	quantity: number;
}

interface ICartContextType {
	items: ICartItems[];
	addToCart: (productId: number) => void;
}

export const CartContext = createContext({} as ICartContextType);

export function CartContextProvider({ children }: { children: ReactNode }) {
	const [cartItems, setCartItems] = useState<ICartItems[]>([]);

	function addToCart(productId: number) {
		setCartItems((state) => {
			const productInCart = state.some((item) => item.productId === productId);

			if (productInCart) {
				return state.map((item) => {
					if (item.productId === productId) {
						return { ...item, quantity: item.quantity + 1 };
					} else {
						return item;
					}
				});
			} else {
				return [...state, { productId, quantity: 1 }];
			}
		});
	}

	return (
		<CartContext.Provider value={{ items: cartItems, addToCart }}>
			{children}
		</CartContext.Provider>
	);
}

export const useCart = () => useContext(CartContext);
