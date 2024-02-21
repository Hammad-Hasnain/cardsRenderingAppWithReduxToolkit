import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../button/Button'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { addToCart, removeCart } from '../../store/slices/addToCartSlice';



const Card = ({ data, index, }) => {
    // const selector = useSelector(state => state.productsReducer)
    // console.log('selector===>', selector)
    // console.log('selector===>', selector.isLoading)

    // const PRODS_DATA = selector.productsData
    // console.log(PRODS_DATA)


    const selector = useSelector(state => state.addToCartReducer)

    const dispatch = useDispatch()



    return (

        <>

            <Box key={index} sx={{
                maxWidth: '300px',
                borderRadius: '7px', overflow: 'hidden',
                boxShadow: '0 0 10px', display: 'flex',
                flexDirection: 'column', justifyContent: 'space-between'
            }}>
                <div style={{ margin: 'auto' }}>
                    <img src={data.image}
                        width={'100%'} alt="" />
                </div>

                <Box sx={{ p: 1, justifyContent: 'space-between' }}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        borderBottom: '1px solid #808080', marginBottom: '15px'
                    }}>
                        <Typography sx={{ fontSize: '1.4em' }}>{data.title.slice(0, 15)}
                            <span style={{ cursor: 'pointer' }}>...</span></Typography>

                        <FavoriteBorderIcon sx={{ color: 'red' }} />

                    </div>
                    <div>
                        <Typography sx={{ textTransform: 'capitalize' }}>{data.description.slice(0, 120)}
                            <span style={{ cursor: 'pointer' }}>...</span></Typography>
                    </div>
                    <div>
                        <Typography>Price: {data.price}$</Typography>
                    </div>


                    <Box sx={{ textAlign: "end", }}>
                        {selector.isAddToCartPage ? <Button eventAddToCart={() => dispatch(removeCart(data))} text={'REMOVE CART'} />
                            : <Button eventAddToCart={() => dispatch(addToCart(data))} text={'ADD TO CART'} />

                        }
                    </Box>
                </Box>
            </Box>


        </>

    )
}

export default Card