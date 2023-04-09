import React, { useState } from 'react'
import SignUp from '../SignUp/SignUp';
import LogIn from '../SignIn/LogIn';



function OrderSign() {
    const [toggle, setToggle] = useState(true)

    const checkLogin=()=>{
        setToggle(false)
    }
    const checkSignup = () => {
        setToggle(true)
    }
    return (
        <div>
            {
                toggle ? <LogIn checkLogin={checkLogin}/>:<SignUp checkSignup={checkSignup}/>
                // toggle ? <LogIn checkLogin={checkLogin} /> : <SignUp checkSignup={checkSignup} />
            }
        </div>
    )
}

export default OrderSign
