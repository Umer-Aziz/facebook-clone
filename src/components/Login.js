import { Button } from '@material-ui/core'
import React from 'react'
import "../Login.css"
import { auth, provider } from '../firebase'
import { actionTypes } from '../reducer'
import { useStateValue } from '../StateProvider'

const Login = () => {

    const [ state , dispatch ] = useStateValue();

    const LogIn=()=>{
        auth.signInWithPopup(provider)
    .then( (result) =>{
        
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
        })
        
    }).catch(err => alert(err.message));

    }
    return (
        <div className="login">
            <div className="login_logo">
            <img src="/images/facebook-logo.svg" alt="facebook" />
                <img className="facebook_text" 
                src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook" />
            </div>
            <Button type="submit" onClick={LogIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
