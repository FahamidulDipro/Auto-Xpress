import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [passwordMatchError, setPasswordMatchError] = useState("");
  const onSubmit = (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const cpassword = data.cpassword;
    if (password === cpassword) {
      createUserWithEmailAndPassword(email, password);
    } else {
      setPasswordMatchError(
        <p className="text-danger ">Passwords dn't match, try again</p>
      );
    }
  };
  return (
    <div className="d-flex   justify-content-center w-100 container  mt-5 p-3">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-50 border  border-3 p-3"
      >
        <h1>Register</h1>
        <input
          {...register("name", { required: true })}
          placeholder="Name"
          className="form-control  p-2"
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
          className="w-100 p-2 bg-danger text-light border-0"
          style={{ fontSize: "20px" }}
        />
        <div className="d-flex justify-content-between">
          <div className="text-start mt-3">
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
      </form>
    </div>
  );
};

export default Register;
