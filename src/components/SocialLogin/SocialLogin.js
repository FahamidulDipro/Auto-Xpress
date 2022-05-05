import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";
const SocialLogin = () => {
  const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const googleLoginHandler = () => {
    signInWithGoogle();
  };
  const [user] = useAuthState(auth);
  if (user) {
    const email = user?.email;
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
    navigate("/");
  }
  //Displaying Loading Spinner while logging in
  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-3">
      {console.log(user)}
      <h3>Or</h3>
      <hr />
      <Button
        variant="outline-primary w-100 p-2 "
        onClick={googleLoginHandler}
        style={{ fontSize: "20px" }}
      >
        <img
          src="../google.png"
          alt="googleImg"
          style={{ height: "30px", marginRight: "30px" }}
        ></img>{" "}
        Signin With Google
      </Button>
    </div>
  );
};

export default SocialLogin;
