import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Loading/Loading";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { Button, Toast } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


  
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailAndPassword(email, password);
    fetch("https://polar-inlet-04132.herokuapp.com/getToken", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((result) => {
        
        console.log(result);
        //Setting user jwt token to local storage

        localStorage.setItem("AccessToken", result.token);
      });
  };
  const from = location?.state?.from?.pathname || "/";

  //Loading Spinner while loggin in
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    navigate(from, { replace: true });
  }

  const resetPass = async (data)=>{
     const email = data.email;
     if(email){
       await sendPasswordResetEmail(email);
       toast("Password Reset Email Sent");
     }else{
       toast("Please enter your Email Address")
     }
     
  }
  let displayError;
  if (error) {
    displayError = <p className="text-danger text-start">{error?.message}</p>;
  }
  return (
    <div>
      <ToastContainer></ToastContainer>
      
      <div
        className="d-flex   justify-content-center w-100 container p-3"
        style={{ marginTop: "100px" }}
      >
        <section>
          <h1 className="bg-dark text-light mb-0 p-3">Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-100 border border-dark border-3 p-3"
          >
            <input
              {...register("email")}
              type="email"
              required
              placeholder="Email"
              className="form-control  p-2 mt-3"
              style={{ fontSize: "20px", background: "lightgrey" }}
            />
            {displayError}
            <br />
            <input
              {...register("password")}
              type="password"
              required
              placeholder="Password"
              className="form-control  p-2"
              style={{ fontSize: "20px", background: "lightgrey" }}
            />
            <br />

            <input
              type="submit"
              value="Login"
              className="w-100 p-2 bg-danger text-light border-0 rounded"
              style={{ fontSize: "20px" }}
            />

            <div className="d-flex justify-content-between">
              <div className="text-start ">
                <Button
                  variant="link text-decoration-none"
                  onClick={handleSubmit(resetPass)}
                >
                  Forget your password?
                </Button>
              </div>
              <div className="text-end mt-2">
                <p className="text-decoration-none" to="/passwordReset">
                  Don't have an account?{" "}
                  <Link to="/register" className="text-danger">
                    Please Register
                  </Link>
                </p>
              </div>
            </div>
            <SocialLogin></SocialLogin>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Login;
