import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import getCart from '@com/services/products/getCart';

// Define a type for the slice state
interface CartState {
	discountedTotal: number;
	id: number;
	total: number;
	products: {
		discountPercentage: number;
		discountedTotal: number;
		// discountedPrice
		id: number;
		price: number;
		quantity: number;
		thumbnail: string;
		title: string;
		total: number;
	}[];
	totalProducts: number;
	totalQuantity: number;
	userId: number;
}

// Define the initial state using that type
const initialState: CartState = {
	discountedTotal: 0,
	id: 0,
	total: 0,
	products: [
		{
			discountPercentage: 0,
			discountedTotal: 0,
			// discountedPrice
			id: 0,
			price: 0,
			quantity: 0,
			thumbnail: '',
			title: '',
			total: 0,
		},
	],
	totalProducts: 0,
	totalQuantity: 0,
	userId: 0,
};

const fetchCart = createAsyncThunk('cart/fetchCart', async (id: string) => {
	const response = await getCart(id);
	return response.data;
});

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// getCartQuantity: (state) => {
		// 	state.quantity += 1;
		// },
		// decrement: (state) => {
		// 	state.quantity -= 1;
		// },
		// // Use the PayloadAction type to declare the contents of `action.payload`
		// incrementByAmount: (state, action: PayloadAction<number>) => {
		// 	state.quantity += action.payload;
		// },
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCart.fulfilled, (state, action) => {
			return action.payload;
		});
		builder.addCase(fetchCart.rejected, (state, action) => {});
		builder.addCase(fetchCart.pending, (state, action) => {});
	},
});

export const {} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart;

export default cartSlice.reducer;
