import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { ToastContainer, toast } from "react-toastify";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";

import "react-toastify/dist/ReactToastify.css";
import SocialLogin from "../SocialLogin/SocialLogin";
import Loading from "../Loading/Loading";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const onSubmit = async (data) => {
    const name = data.name;
    const photo = data.photoURL;
    const email = data.email;
    const password = data.password;
    const cpassword = data.cpassword;
    console.log(data);
    if (password === cpassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name, photoURL: photo });
      fetch("http://localhost:5000/getToken", {
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
      console.log("Updated Profile");
      navigate("/");
    } else {
      setPasswordMatchError(
        <p className="text-danger text-start mt-3">
          Passwords didn't match, try again
        </p>
      );
    }
  };
  //Displaying Loading screen while registering
  if(loading){
    return <Loading></Loading>
 }
  let displayError;
  if (error) {
    toast(" User Can't Be Created");
    displayError = <p className="text-danger">{error?.message}</p>;
  } else {
    toast("New User Created");
  }
  return (
    <div
      className="d-flex   justify-content-center w-100 container  p-3"
      style={{ marginTop: "100px" }}
    >
      {user ? <ToastContainer /> : null}
      <section>
        <h1 className="bg-dark text-light mb-0 p-3">Register</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-100 border  border-dark border-3 p-3"
        >
          <input
            {...register("name", { required: true })}
            placeholder="Name"
            className="form-control  p-2 mt-3"
            style={{ fontSize: "20px", background: "lightgrey" }}
          />
          <br />
          <input
            {...register("photoURL", { required: true })}
            placeholder="Photo URL"
            className="form-control  p-2 mt-3"
            style={{ fontSize: "20px", background: "lightgrey" }}
          />
          <br />
          <input
            {...register("email")}
            type="email"
            required
            placeholder="Email"
            className="form-control  p-2"
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
          {displayError}
          <br />
          <input
            {...register("cpassword")}
            type="password"
            required
            placeholder="Confirm Password"
            className="form-control  p-2"
            style={{ fontSize: "20px", background: "lightgrey" }}
          />
          <br />

          <input
            type="submit"
            value="Register"
            className="w-100 p-2 bg-danger text-light border-0 rounded"
            style={{ fontSize: "20px" }}
          />
          {passwordMatchError}
          <div className="d-flex justify-content-between">
            <div className="text-start mt-3 me-5">
              <Link className="text-dark text-decoration-none" to="#">
                Recommend Strong Password?
              </Link>
            </div>
            <div className="text-end mt-3">
              <p className="text-decoration-none">
                Already have an account?{" "}
                <Link to="/login" className="text-danger">
                  Please Login
                </Link>
              </p>
            </div>
          </div>
          <SocialLogin></SocialLogin>
        </form>
      </section>
    </div>
  );
};

export default Register;
