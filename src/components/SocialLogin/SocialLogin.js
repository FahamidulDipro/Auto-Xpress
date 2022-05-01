import React from 'react';
import { Button } from 'react-bootstrap';

const SocialLogin = () => {
    return (
        <div className='mt-3'>
            <h3>Or</h3>
            <hr />
            <Button  variant="outline-primary w-100 p-2 "
              style={{ fontSize: "20px" }}><img src="../google.png" alt='googleImg' style={{height:'30px',marginRight:'30px'}}></img> Signin With Google</Button>
        </div>
    );
};

export default SocialLogin;