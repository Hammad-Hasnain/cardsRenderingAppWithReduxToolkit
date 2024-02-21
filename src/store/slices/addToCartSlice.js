import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    addedCarts: [],
    isAddToCart: false,
    isAddToCartPage: false
}

const AddToCartSlice = createSlice({
    name: 'Add to cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log('state===>', state)
            console.log('action===>', action)


            // state.addedCarts.push(action.payload)

            if (state.addedCarts.length === 0) {
                state.addedCarts.push(action.payload)
                state.isAddToCart = true;
            } else {
                // console.log(state.addedCarts[0].id);

                // console.log("dispatched");
                // const filteredCarts = state.addedCarts.filter((e, i) => {

                //     return e.id === action.payload.id


                // })

                // const filtered = state.addedCarts.filtifer(e => e.id === action.payload.id)

                // if (filtered != [] ) {
                //     state.addedCarts.push(action.payload)
                // }

                let check = false;
                state.addedCarts.forEach(e => {

                    if (e.id === action.payload.id) {
                        // state.addedCarts.push(e)
                        check = true;
                    }


                })

                if (!check) {
                    state.addedCarts.push(action.payload)
                }




            }


            console.log('state===>', state)
            console.log('action===>', action)


        },

        isAddToCartPage(state, action) {
            state.isAddToCartPage = action.payload
        },

        removeCart(state, action) {
            state.addedCarts.forEach((e, i) => {
                e.id === action.payload.id && state.addedCarts.splice(i, 1)
            })
        }
    }
})

const { actions, reducer } = AddToCartSlice;

export const { addToCart, isAddToCartPage, removeCart } = actions;

export default reducer;