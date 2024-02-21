import { Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../card/Card'
import { isAddToCartPage } from '../../store/slices/addToCartSlice'

const AddedCarts = () => {

    const selector = useSelector(state => state.addToCartReducer)
    // console.log('add to cart selector=====> ', selector)
    // console.log('add to cart selector=====> ', selector.addedCarts)
    const addToCartsData = selector.addedCarts;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(isAddToCartPage(true))

        return () => {
            dispatch(isAddToCartPage(false))
        }
    }, [])




    // selector.isAddToCartPage ? console.log('Y') : console.log('N');



    return (
        <>

            <Typography sx={{ textTransform: 'capitalize', textAlign: 'center', fontSize: '3em', fontFamily: 'cursive', margin: '2em' }}>
                {addToCartsData.length > 0 ? 'Your added carts' : 'No Added Carts'}
            </Typography>

            <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2, justifyContent: 'center', }}>

                <>
                    {
                        addToCartsData.map((e, i) =>

                            <Card data={e} key={i} isAtAddToCart={true} />
                        )
                    }
                </>

            </Stack>



        </>


    )
}

export default AddedCarts