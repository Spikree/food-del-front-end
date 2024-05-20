import { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

export default function LoginPopup({setShowLogin}) {

    const {url} = useContext(StoreContext)

    const [currState, setCurrState] = useState("Login");
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({
            ...data,[name]:value
        }))
    }

    const onLogin = async (event) => {
        event.preventDefault();
    }

    return <>
        <div className='login-popup'>
            <form onSubmit={onLogin} className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>
                        {currState}
                    </h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-inputs">
                    {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required/>}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />
                </div>
                <button type='submit'>{currState==="Sign up"?"Create accound":"Login"}</button>
                <div className='login-popup-condition'>
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {
                    currState === "Login"?<p>Create a new account? <span onClick={() => setCurrState("Sign up")}>Click here</span></p>:<p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
                }
            </form>
        </div>
    </>
}