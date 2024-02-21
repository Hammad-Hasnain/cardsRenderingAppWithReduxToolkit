import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../store/slices/productsSlice'
import { Box, Stack, Typography } from '@mui/material'
import loading from '../../assets/gif/loading.gif'
import Card from '../card/Card'



const Products = () => {
    const selector = useSelector(state => state.productsReducer)
    // console.log('selector===>', selector)
    // console.log('selector===>', selector.isLoading)

    const PRODS_DATA = selector.productsData
    // console.log('*********PRODS_DATA')



    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchData())
    }, [])


    return (

        !selector.isLoading ?
            <>
                <Typography sx={{ fontSize: "4em", fontWeight: 'bold', pt: 5, textAlign: 'center', fontFamily: 'Times New Roman' }}>Products</Typography>

                <Stack sx={{ flexDirection: 'row', flexWrap: 'wrap', gap: 2, justifyContent: 'center', }}>
                    <>
                        {
                            PRODS_DATA.map((e, i) =>
                                <Card data={e} key={i} />
                            )
                        }
                    </>
                </Stack>
            </> :
            <Box sx={{ textAlign: 'center', marginTop: '4em' }}>
                <img src={loading} alt="Loading..." width={'50px'} />
            </Box>


    )
}

export default Products