import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from "react-router-dom";
import Loading from '../Loading/Loading';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const googleLoginHandler = ()=>{
        signInWithGoogle();
       
    }
    if(user){
        navigate('/');
    }
    if(loading){
       return <Loading></Loading>
    }
    
    return (
        <div className='mt-3'>
            <h3>Or</h3>
            <hr />
            <Button  variant="outline-primary w-100 p-2 " onClick={googleLoginHandler}
              style={{ fontSize: "20px" }}><img src="../google.png" alt='googleImg' style={{height:'30px',marginRight:'30px'}}></img> Signin With Google</Button>
        </div>
    );
};

export default SocialLogin;