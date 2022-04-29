import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="d-flex   justify-content-center w-100 container  mt-5 p-3">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-50 border  border-3 p-3"
        >
          <h1>Login</h1>
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
              <Link
                className="text-danger  text-decoration-none"
                to="/passwordReset"
              >
                Forget your password?
              </Link>
            </div>
            <div className="text-end mt-3">
              <p className="text-decoration-none" to="/passwordReset">
                Don't have an account?{" "}
                <Link to="/register" className="text-danger">
                  Please Register
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
