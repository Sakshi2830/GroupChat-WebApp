import React from 'react'
import "./Login.css"
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'

function Login() {
    const signIn= () => {
        auth.signInWithPopup(provider)
        .then(result => console.log(result))
        .catch((error) => alert(error.message));
    }

    return (
        <div className="Login">
            <div className="login__container">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4-5dm_vg9CPJ5Uz1FDB1WI0Mf8ASuQH-jdrx5eZq_ORXuQQu-5t0xSgfhUXhwAWiLdE&usqp=CAU"
                // src="https://upload.wikimedia.org/wikipedia"
                alt=""
            />
            <div className="login__text">
                <h1>Sign in to WhatsApp</h1>
            </div>
            <Button onClick={ signIn } >
            Sign In with Google
            </Button>
            </div>
            
        </div>
    )
}

export default Login
