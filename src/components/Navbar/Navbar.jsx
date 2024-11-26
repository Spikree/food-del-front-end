import { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
import { BsBasket3Fill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { StoreContext } from '../../context/StoreContext';

export default function Navbar({setShowLogin}) {
    const [menu,setMenu] = useState("home");
    const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/")
    }
    return <>
        <div className='navbar'>
            <Link to='/'><h1 className='logo'>Copperleaf</h1></Link>
            
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu ==="home"?"active":""}>Home</Link>    
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
            </ul>
            <div className="navbar-right">
                {/* <img src={assets.search_icon} alt="" /> */}
                <div className="navbar-search-icon">
                    {token && <Link className='cart' to='/cart'><BsBasket3Fill style={{fontSize:"2rem", color:"gray"}}/></Link>}
                    <div className={getTotalCartAmount()===0?"":"dot"}>
                    </div>
                </div>
                {!token?<button onClick={() => setShowLogin(true)}>Sign in</button>:<div className='navbar-profile'>
                <FaUserAlt style={{fontSize:"2rem", color:"gray"}} />
                    <ul className='nav-profile-dropdown'>
                        <li onClick={() => {navigate('/myorders')}}>  <p>Orders</p></li>
                        <hr />
                        <li onClick={logout}><p>Logout</p></li>
                    </ul>
                    </div>}
                
            </div>
        </div>
    </>
}