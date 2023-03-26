import useLocalStorage from '@/hooks/useLocalStorage';
import React, { createContext, PropsWithChildren, useContext } from 'react';

interface CartItem {
	id: string;
	photo: string;
	title: string;
	author: string;
	price: number;
	quantity: number;
	cartItemQuantity: number;
}

interface CartContext {
	getItemQuantity: (id: string) => number;
	addToCart: (
		id: string,
		photo: string,
		title: string,
		author: string,
		price: number,
		quantity: number
	) => void;
	increaseCartQuantity: (id: string) => void;
	decreaseCartQuantity: (id: string) => void;
	removeFromCart: (id: string) => void;
	cartQuantity: number;
	cartItems: CartItem[];
}

const CartContext = createContext({} as CartContext);

export const useCart = () => {
	return useContext(CartContext);
};

const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
		'shopping-cart',
		[]
	);

	const cartQuantity = cartItems.reduce(
		(q, item) => item.cartItemQuantity + q,
		0
	);

	const getItemQuantity = (id: string) => {
		return cartItems.find((item) => item.id === id)?.cartItemQuantity || 0;
	};

	const addToCart = (
		id: string,
		photo: string,
		title: string,
		author: string,
		price: number,
		quantity: number
	) => {
		if (cartItems.find((item) => item.id === id)) {
			increaseCartQuantity(id);
		} else {
			setCartItems((currItems) => [
				...currItems,
				{ id, photo, title, author, price, quantity, cartItemQuantity: 1 },
			]);
		}
	};

	const increaseCartQuantity = (id: string) => {
		setCartItems((currItems) =>
			currItems.map((item) => {
				if (item.id === id && item.cartItemQuantity < item.quantity) {
					return { ...item, cartItemQuantity: item.cartItemQuantity + 1 };
				} else {
					return item;
				}
			})
		);
	};

	const decreaseCartQuantity = (id: string) => {
		setCartItems((currItems) => {
			if (currItems.find((item) => item.id === id)?.cartItemQuantity === 1) {
				return currItems.filter((item) => item.id !== id);
			} else {
				return currItems.map((item) => {
					if (item.id === id) {
						return { ...item, cartItemQuantity: item.cartItemQuantity - 1 };
					} else {
						return item;
					}
				});
			}
		});
	};

	const removeFromCart = (id: string) => {
		setCartItems((currItems) => {
			return currItems.filter((item) => item.id !== id);
		});
	};

	const cartContextValue: CartContext = {
		getItemQuantity,
		addToCart,
		increaseCartQuantity,
		decreaseCartQuantity,
		removeFromCart,
		cartItems,
		cartQuantity,
	};

	return (
		<CartContext.Provider value={cartContextValue}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
