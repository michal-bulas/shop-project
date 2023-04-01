import { Product } from "@/pages/[category]/types";

export interface CartItem {
	id: string;
	photo: string;
	title: string;
	author: string;
	price: number;
	quantity: number;
	cartItemQuantity: number;
}

export interface CartContext {
	getItemQuantity: (id: string) => number;
	addToCart: (product: Product) => void;
	increaseCartQuantity: (id: string) => void;
	decreaseCartQuantity: (id: string) => void;
	removeFromCart: (id: string) => void;
	cartQuantity: number;
	cartItems: CartItem[];
}