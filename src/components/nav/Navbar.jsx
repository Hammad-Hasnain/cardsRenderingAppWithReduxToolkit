import { Badge, Box, Stack, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';




const Navbar = () => {

    const { addedCarts } = useSelector(state => state.addToCartReducer)
    // console.log(addedCarts.length)


    return (

        <Stack sx={{ backgroundColor: '#000', padding: '5px 25px', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
            <Box>
                <Typography sx={{ color: '#fff', fontSize: '2em', fontFamily: 'cursive' }}>H Square</Typography>
            </Box>

            <Box>
                <Badge badgeContent={addedCarts.length} color="primary">
                    <Link to={'/addedCarts'}>
                        <ShoppingCartIcon sx={{ color: '#fff' }} />
                    </Link>
                </Badge>
            </Box>
        </Stack>
    )
}

export default Navbar