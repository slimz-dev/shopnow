import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import getCart from '@com/services/products/getCart';
import updateCart from '@com/services/products/updateCart';
import { toast } from 'react-toastify';

type productFetchType = {
	discountedTotal: number;
	discountedPrice?: never;
};

type productUpdateType = {
	discountedPrice: number;
	discountedTotal?: never;
};
type productTypeCommon = {
	discountPercentage: number;
	id: number;
	price: number;
	quantity: number;
	thumbnail: string;
	title: string;
	total: number;
};

type productType = productTypeCommon & (productFetchType | productUpdateType);
// Define a type for the slice state
interface CartState {
	discountedTotal: number;
	id: number;
	total: number;
	products: productType[];
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

export const fetchCart = createAsyncThunk('cart/fetchCart', async (id: string) => {
	const response = await getCart(id);
	return response;
});

export const updateCartFromRedux = createAsyncThunk(
	'cart/updateCart',
	async (cartUpdate: { cartID: number; updatedItem: any; isAddOutside?: boolean }) => {
		const response = await updateCart(cartUpdate.cartID, cartUpdate.updatedItem);
		return {
			...response,
			isAddOutside: cartUpdate.isAddOutside,
		};
	}
);

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
			if (!action.payload) {
				return;
			}
			state.discountedTotal = action.payload.discountedTotal;
			state.id = action.payload.id;
			state.total = action.payload.total;
			state.products = action.payload.products;
			state.totalProducts = action.payload.totalProducts;
			state.totalQuantity = action.payload.totalQuantity;
			state.userId = action.payload.userId;
		});
		builder.addCase(fetchCart.rejected, (state, action) => {});
		builder.addCase(fetchCart.pending, (state, action) => {});
		builder.addCase(updateCartFromRedux.fulfilled, (state, action) => {
			state.discountedTotal = action.payload.discountedTotal;
			state.id = action.payload.id;
			state.total = action.payload.total;
			state.products = action.payload.products.map((product: productType) => ({
				...product,
				discountedTotal: product.discountedPrice,
			}));
			state.totalProducts = action.payload.totalProducts;
			state.totalQuantity = action.payload.totalQuantity;
			state.userId = action.payload.userId;
			if (action.payload.isAddOutside) {
				toast.success('Product added successfully');
			}
		});
	},
});

export const {} = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.cart;

export default cartSlice.reducer;
