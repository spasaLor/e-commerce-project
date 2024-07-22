import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import '../styles/navbar.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({len}){
    const navigate=useNavigate();

    const handleHomeClick = ()=>{
        navigate('/');
    }

    return(
        <nav>
            <div className="container">
                <div className="logo" onClick={handleHomeClick}>
                    <p className="name">fona</p>
                </div>
                <div className="items">
                    <Link to="/">Home</Link>
                    <Link to="shop">Shop</Link>
                    <Link to="product">Product</Link>
                    <Link to="blog">Blog</Link>
                    <Link to="pages">Pages</Link>
                </div>
                <div className="icons">
                    <SearchIcon fontSize='small'/>
                    <AccountCircleOutlinedIcon fontSize='small' />
                    <FavoriteBorderOutlinedIcon fontSize='small' />
                    {len >0 ? <Link to='cart'> <ShoppingCartOutlinedIcon fontSize='small' /><span className='cart-length'>({len})</span></Link> : <Link to='cart'> <ShoppingCartOutlinedIcon fontSize='small' /></Link> }
                    <MoreVertOutlinedIcon fontSize='small' />
                </div>
            </div>
        </nav>
    );
}